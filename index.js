import weaviate from 'weaviate-ts-client';
import { readFileSync, writeFileSync } from 'fs';

const client = weaviate.client({
    scheme: 'http',
    host: 'localhost:8080', 
});

async function run() {
    const schemaConfig = {
        'class': 'Animal6',
        'vectorizer': 'img2vec-neural',
        'vectorIndexType': 'hnsw',
        'moduleConfig': {
            'img2vec-neural': {
                'imageFields': ['image']
            }
        },
        'properties': [
            {
                'name': 'image',
                'dataType': ['blob']
            },
            {
                'name': 'text',
                'dataType': ['string']
            }
        ]
    };


    await client.schema.classCreator().withClass(schemaConfig).do();

 
    const img = readFileSync('./img/d4.jpeg');
    const b64 = Buffer.from(img).toString('base64');

 
    await client.data.creator()
        .withClassName('Meme')
        .withProperties({
            image: b64,
            text: 'matrix meme'
        })
        .do();

    const test = Buffer.from(readFileSync('./test.jpeg')).toString('base64');

    const resImage = await client.graphql.get()
        .withClassName('Meme')
        .withFields(['image'])
        .withNearImage({ image: test })
        .withLimit(1)
        .do();

    const result = resImage.data.Get.Meme[0].image;
    writeFileSync('./result.jpg', result, 'base64');
}

run().catch(console.error);
