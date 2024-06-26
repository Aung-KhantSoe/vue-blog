import { db } from "@/firebase/config";
import { ref } from "vue";

let getPost = (id)=>{
    let post = ref(null);
    let error = ref("");
    let load = async()=>{
        try {
            let response = await db.collection('posts').doc(id).get();
            post.value = {id:response.id,...response.data()}
        } catch (err) {
            error.value = err.message;
        }        
    }
    return {post,error,load};
}

export default getPost;