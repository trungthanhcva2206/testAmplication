import { DocumentBuilder, SwaggerCustomOptions } from "@nestjs/swagger";

export const swaggerPath = "api";

export const swaggerDocumentOptions = new DocumentBuilder()
  .setTitle("RealEstateCRM")
  .setDescription(
    'CRM for managing properties, clients, appointments, and agent assignments in a real estate agency.\n\n## Congratulations! Your service resource is ready.\n  \nPlease note that all endpoints are secured with JWT Bearer authentication.\nBy default, your service resource comes with one user with the username "admin" and password "admin".\nLearn more in [our docs](https://docs.amplication.com)'
  )
  .addBearerAuth()
  .build();

export const swaggerSetupOptions: SwaggerCustomOptions = {
  swaggerOptions: {
    persistAuthorization: true,
  },
  customCssUrl: "../swagger/swagger.css",
  customfavIcon: "../swagger/favicon.png",
  customSiteTitle: "RealEstateCRM",
};
