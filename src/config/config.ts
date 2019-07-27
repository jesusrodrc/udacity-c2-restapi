export const config = {
  "dev": {
    "username": process.env.POSGRESS_USERNAME,
    "password": process.env.POSGRESS_PASSWORD,
    "database": process.env.POSGRESS_DATABASE,
    "host": process.env.POSGRESS_HOST,
    "dialect": process.env.DATABASE_DIALECT,
    "aws_reigion": process.env.AWS_REGION,
    "aws_profile": process.env.AWS_PROFILE,
    "aws_media_bucket": process.env.AWS_MEDIA_BUCKET
  },
  "prod": {
    "username": "",
    "password": "",
    "database": "udagram_prod",
    "host": "",
    "dialect": "postgres"
  },
  "jwt": {
    "secret": process.env.SECRET_JWT_UDAGRAM
  }
}
