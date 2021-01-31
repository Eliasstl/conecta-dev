import React from 'react';
import PostCard from '../../../components/PostCard';
import  {makeStyles} from '@material-ui/styles';

const usesStyles = makeStyles((theme)=>{
    root:{

    }
})

const posts = [
    {
      
        id: 1,
        author:{
            id:1,
            name:' Elias Souza',
            username:'Eliasstl',
            avatar:'/images/avatar_1.jpg'
        },
        title: "Criando um App dozero ultilizando React.js",
        date:"Janairo 30, 2021",
        description:'Fala galera qual é o framework, favorito de vocês',
        hashtags:'#dotnet, #javascript, #react',
        image:"images/posts/post1.png"
},
{
id: 2,
        author:{
            id:2,
            name:' Elias Souza',
            username:'Eliasstl',
            avatar:'/images/avatar_1.jpg'
        },
        title: "Comparativo entre React.js e Vue.js",
        date:"Janairo 30, 2021",
        description:'Bora compartilhar experiência',
        hashtags:'#dotnet, #javascript, #react',
        image:"images/posts/post2.png"
      
}

];

function Feed(){
    const classes = usesStyles();
    return(
        <div className={classes.root}>
            {
                posts.map(post =>(
                    <PostCard key={post.id} post={post}/>

                ))
            }
           
        </div>
    )
}

export default Feed;