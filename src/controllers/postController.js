const Post = require('../models/postModel'),

postCtrl = {}

// creating a post using post method
postCtrl.createPost = async(req,res)=>{
    try{
        let post = new post(res.body);
         let result = await post.save()
        res.status(200).send({message:'blog created',result}) 
    }
    catch{
        console.log(error)
    }
}

//getting posts using get method
postCtrl.getPost = async(req,res)=>{
    try {
        let post = await Post.find({})
        post? res.status(200).send({message:'blog is available',post}):res.status(400).send({message:'no blog'})
    }
    catch{
        console.log(error)
    }

}
//getting posts by specific author using get method
postCtrl.getPostByAuthor = async(req,res)=>{
    try {
        let post = await Post.find({author:req.body.author})
        post? res.status(200).send({message:'blog is available',post}):res.status(400).send({message:'no blog'})
    }
    catch{
        console.log(error)
    }

}


//getting posts by param using get method
postCtrl.getPostByParam = async(req,res)=>{
    try {
        let post = await Post.find({_id:req.params._id})
        post? res.status(200).send({message:" blog are available" ,post}):res.status(400).send({message:'no blog'},post)
    }
    catch{
        console.log(error)
    }

}

//updating a post using the put method
postCtrl.updatePost = async(req,res) =>{
    const {content,upvotes,downvotes} = req.body
    try{
        let post = await Post.findOneAndUpdate({_id:req.params._id},{content,upvotes,downvotes})
        post? res.status(200).send({message:'blog was successfully updated'},post):res.status(400).send({message: "Couldn't update blog"},post)
    }
    catch{
        console.error
    };
}

//deleting post using  delete method

postCtrl.deletePost = async (req,res) =>{
    try{
        let post = await Post.findById({_id:req.params._id});
        res.status(200).send({message:'blog successfully deleted'})
    }
    catch{
        console.log(error)
    }
}

module.exports = postCtrl
