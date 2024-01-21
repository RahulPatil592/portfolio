FROM node:alpine AS development

# Declaring env
# ENV NODE_ENV development
ENV SERVICE_ID="service_yegchll"
ENV TEMPLATE_ID="template_kvqosfp"
ENV PUBLIC_KEY="62snBK0RsvIeoiV6V"


# Setting up the work directory
WORKDIR /react-app

# Installing dependencies
COPY ./package*.json /react-app

RUN npm install

# Copying all the files in our project
COPY . .

# Starting our application
CMD ["npm","start"]
