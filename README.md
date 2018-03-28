# aws-serverless-reactjs

Boilerplate of ReactJS serverless web application using AWS S3

## Getting Started

These instructions will get you up and running with a ReactJS serverless web application running on AWS S3.

### Prerequisites

* [AWS S3 Bucket](https://aws.amazon.com/s3/)
    * [Hosting a Static Website on Amazon S3](https://docs.aws.amazon.com/AmazonS3/latest/dev/WebsiteHosting.html) 
    * Ensure `index.html` is specified as the 'Index document' under 'Static website hosting' of your S3 bucket
* [NodeJS](https://nodejs.org)
* [Yarn](https://yarnpkg.com)

### Installing

* Edit `package.json` file where `s3://<YOUR_S3_BUCKET_URL>` points to your AWS S3 public bucket
* Run `yarn` to download necessary packages
* Run `yarn build` to build the ReactJS web application
* Run `yarn start:dev` to run the development server
* Publish your ReactJS web application by running `yarn sync`
    * *Caution: `yarn sync` is irreversible and will overwrite any existing files in your S3 bucket*
