# Image-Search-Engine

# Image Similarity Search with Weaviate

This project demonstrates how to use Weaviate, a vector search engine, to store, retrieve, and compare images based on their visual similarity. By leveraging the `img2vec-neural` module, powered by a ResNet model, we can vectorize images and perform efficient similarity searches using the HNSW (Hierarchical Navigable Small World) algorithm.

## Features

- **Image Vectorization**: Convert images to vectors using the `img2vec-neural` module.
- **Efficient Similarity Search**: Search for visually similar images using vector search with the HNSW algorithm.
- **GraphQL Integration**: Perform similarity searches and retrieve results using Weaviate's GraphQL API.
- **Local Development**: Run and test everything locally with a Weaviate instance.

## Prerequisites

Before you can run this project, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (v12 or later)
- [Weaviate](https://weaviate.io/) (running locally on port 8080)
- [Docker](https://www.docker.com/) (if you want to run Weaviate via Docker)
- [weaviate-ts-client](https://www.npmjs.com/package/weaviate-ts-client) (installed via npm)

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/yashcodes224/image-similarity-search.git
   cd image-similarity-search
Install the required dependencies:

bash
Copy code
npm install
Ensure Weaviate is running locally. You can use Docker to start Weaviate with the img2vec-neural module:

bash
Copy code
docker run -d -p 8080:8080 semitechnologies/weaviate:latest \
    --module img2vec-neural \
    --enable-modules img2vec-neural
Add your images to the ./img directory.

Usage
Run the script to create the schema, add data, and perform a similarity search:

bash
Copy code
node index.js
The script will:

Create a schema for storing memes in Weaviate.
Read and store an image (e.g., dog1.jpg) along with some text metadata.
Perform a similarity search with another image (test.jpeg).
Write the most similar image found in Weaviate to result.jpg.
Check the result.jpg file in the root directory to see the result of the similarity search.

Project Structure
index.js: The main script that handles schema creation, data insertion, and image similarity search.
./img: Directory to store images for the project.
./result.jpg: The result image from the similarity search.
Example Output
After running the script, you'll have a new image file (result.jpg) that is visually similar to the input image (test.jpeg). This output demonstrates the effectiveness of vector-based similarity search using Weaviate.

Troubleshooting
Weaviate Connection Issues: Ensure that Weaviate is running and accessible at localhost:8080. If you're running it on a different host or port, update the host in the Weaviate client configuration.
Module Errors: Make sure the img2vec-neural module is enabled in your Weaviate instance. Check the Weaviate logs for any errors related to module loading.
Contributing
Contributions are welcome! Please open an issue or submit a pull request if you have any ideas or improvements.

Benefits in Production
Efficient Image Search: Using Weaviate with the img2vec-neural module allows you to efficiently search for similar images by leveraging vectorization and approximate nearest neighbor (ANN) search algorithms. This is particularly useful in applications like image recommendation systems, content moderation, and media asset management.

Scalable Vector Search: The use of HNSW for vector indexing ensures that the search remains fast even as the dataset grows. This scalability is crucial for production environments with large amounts of data.

Integration Flexibility: By using API calls through the Weaviate client, this approach allows you to integrate image similarity search capabilities into various applications, regardless of where Weaviate is hosted (locally or in the cloud).

Modularity: The separation of concerns (image vectorization, storage, search) within Weaviate makes the system modular and easier to maintain and extend in production. For instance, if a new image vectorization method becomes available, it can be swapped in without major changes to the overall system.

Local Development and Testing: Running Weaviate locally allows for rapid development and testing. Once the system is verified locally, it can be deployed to production with minimal changes.

License
This project is licensed under the MIT License - see the LICENSE file for details.

Acknowledgments
Weaviate - The open-source vector search engine that powers this project.
ResNet - The deep learning model behind the img2vec-neural module.
