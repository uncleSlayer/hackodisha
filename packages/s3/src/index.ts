import { S3Client, GetObjectCommand, PutObjectCommand } from "@aws-sdk/client-s3"
import { getSignedUrl } from "@aws-sdk/s3-request-presigner"

export const s3 = new S3Client({
    region: 'ap-south-1',
    credentials: {
        // accessKeyId: env("ACCESS_KEY"),
        // secretAccessKey: env("SECRET_KEY")
        accessKeyId:"AKIA4O2XOJFY7FEPRMUE" ,
        secretAccessKey:"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"
    }
})

export const returnURL = async (keyName: string) => {
    const command = new GetObjectCommand({
        Bucket: 'hackodhisa',
        Key: keyName
    })

    return await getSignedUrl(s3, command)

}

export const uploadObjUrl = async (keyName: string, contentType: string) => {
    const command = new PutObjectCommand({
        Bucket: 'hackodhisa',
        Key: `products/${keyName}`,
        ContentType: contentType
    })

    return await getSignedUrl(s3, command)
}