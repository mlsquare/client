# Client Demo

> **Note**: *We assume that you already have an idea of what IMLY is and how it works. If not, we highly recommend you to checkout the [mlsquare repo](https://github.com/mlsquare/mlsquare) and then come back.*  
+ The core purpose of this repository is to demonstrate the client-side usability of models generated via IMLY. Currently, we have a small web app that shows the feasibility of using an IMLY-generated model in web environment. Also, a docker image is available that runs and checks if an algorithm mapped in IMLY is compatible with [onnx runtime](https://github.com/Microsoft/onnxruntime) or not.
+ Why is such a demo required? Well, the first question an IMLY user might be tempted to ask is "What do I with this model I just made using IMLY?". This repository tries to answer that question.

## Web App

+ This is a simple node.js app that loads an [onnx](onnx.ai) model (generated using IMLY) and it's corresponding test data. You can then evaluate the model by clicking the "score" button. The web app then generates a score by running the loaded onnx model and it's dataset. The runtime used here is [onnx.js](https://github.com/Microsoft/onnxjs)

### Current status

The app currently just loads and runs a single iris example. We will soon be extending it with more models in the coming days.

### TODO
- Add tfjs support
- Integrate with IMLY model zoo(hyperlink)

#### [Live demo](https://onnx-web-validator.herokuapp.com/)

## IMLY Docker image

+ The IMLY docker image mentioned here can be accessed from docker hub in mlsquare/imly:latest repo. This docker image runs a python script which processes a sample model generated via IMLY.The runtime used here is ONNX runtime(hyperlink). By the end of the container session, the python script responds with a bunch of useful values like score, runtime status, model url etc.
### Usage
- We assume that you have already installed Docker. If not, please do install using this [link](https://docs.docker.com/v17.12/install/).
- To pull and run the docker image  
Run `docker run mlsquare/imly`
- To update or pull latest imly image  
Run `docker pull mlsquare/imly:latest`
### Current status
As mentioned above, currently the image runs a single sample model using ONNX runtime using a python script. We will be extending this image with more models from IMLY model zoo. Also, we will be adding new docker images with different runtimes(say tensorflow, pytorch etc) in the coming days.

### TODO
- Extend the existing image with more datasets from IMLY model zoo.
- Add two new docker images that demonstrates feasibility of running models from IMLY model zoo in tensorflow and pytorch runtime.

#### [Link to mlsquare-imly docker hub repo](https://cloud.docker.com/u/mlsquare/repository/docker/mlsquare/imly)


>Note: Please feel free to raise an issue if you think your questions are not answered in this repo.
