import * as express from 'express';
import * as mongoose from 'mongoose';
import {Post} from './post';
//import axios from 'axios';

const router = express.Router();

//const API = 'https://jsonplaceholder.typicode.com';

router.get('/',(req,res)=>{
    res.send('api works');
});

router.get('/post',(req,res)=>{

    Post.create({
        title:'title post 1',
        body:'body post 1'
    },(err,post)=>{

        if(err){
            res.send(err);
        }

        res.json(post);
    });

});

router.get('/posts',(req,res)=>{

    Post.find({},(err,posts)=>{

        if(err){
            res.send(err)
        }

        res.json(posts);
    });
    // axios.get(`${API}/posts`)
    //     .then(posts=>{
    //         res.status(200).json(posts.data);
    //     })
    //     .catch(err=>{
    //         res.status(500).send(err);
    //     });
});

export default router;