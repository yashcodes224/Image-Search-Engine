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
# Install the required dependencies:
- npm i weaviate-ts-client
- Pull the weaviate DB instance image & ResNet model from Docker by creating a docker-compose.yml (which will contain the model info)

# Project Structure
- index.js: The main script that handles schema creation, data insertion, and image similarity search.
- ./img: Directory to store images for the project.
- ./result.jpg: The result image from the similarity search.
# Example Output
After running the script, you'll have a new image file (result.jpg) that is visually similar to the input image (test.jpeg). This output demonstrates the effectiveness of vector-based similarity search using Weaviate.

# Benefits of Using Weaviate with the img2vec-neural Module

## 1. Production-Efficient Image Search
Leveraging Weaviate with the img2vec-neural module enables efficient image similarity searches by using vectorization and approximate nearest neighbor (ANN) search algorithms. This capability is especially beneficial for applications like:

- Image recommendation systems
- Content moderation
- Media asset management

## 2. Scalable Vector Search
The use of Hierarchical Navigable Small World (HNSW) for vector indexing ensures that searches remain fast even as the dataset grows. This scalability is critical in production environments with large amounts of data.

## 3. Integration Flexibility
Through API calls via the Weaviate client, this approach allows for the integration of image similarity search capabilities into various applications, regardless of whether Weaviate is hosted locally or in the cloud.

## 4. Modularity
Weaviate's architecture, which separates concerns such as image vectorization, storage, and search, enhances the system’s modularity. This makes the system easier to maintain and extend in production. For example, if a new image vectorization method becomes available, it can be easily swapped in without major changes to the overall system.

## 5. Local Development and Testing
Running Weaviate locally supports rapid development and testing. Once the system is verified locally, it can be deployed to production with minimal changes.


License
This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments
- **Weaviate** - The open-source vector search engine that powers this project.
- **ResNet** - The deep learning model behind the img2vec-neural module.

## Contributions are welcome! Please open an issue or submit a pull request if you have any ideas or improvements.
