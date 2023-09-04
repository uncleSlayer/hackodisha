import { S3Client, GetObjectCommand, PutObjectCommand } from "@aws-sdk/client-s3"
import { getSignedUrl } from "@aws-sdk/s3-request-presigner"

export const s3 = new S3Client({
    region: 'ap-south-1',
    credentials: {
        accessKeyId: 'AKIAU4PZPBNNKINIY2G2',
        secretAccessKey: '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'
    }
})

export const returnURL = async (keyName: string) => {
    const command = new GetObjectCommand({
        Bucket: 'koshalhacks',
        Key: keyName
    })

    return await getSignedUrl(s3, command)

}

export const uploadObjUrl = async (keyName: string, contentType: string) => {
    const command = new PutObjectCommand({
        Bucket: 'koshalhacks',
        Key: `products/${keyName}`,
        ContentType: contentType
    })

    return await getSignedUrl(s3, command)
}