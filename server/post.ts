import * as mongoose from 'mongoose';

const schema = mongoose.Schema;

const postSchema = new schema({
    title:String,
    body:String,
});

export const Post = mongoose.model('Post',postSchema);