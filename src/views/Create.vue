<template>
  <form @submit.prevent="create">
    <label>Post title</label>
    <input type="text" v-model="title" />
    <label>Post body</label>
    <textarea type="text" v-model="body"></textarea>
    <label>Tags (Hit enter to add a tag)</label>
    <input type="text" v-model="tag" @keydown.enter.prevent="handlekeyDown" />
    <div v-for="tag in tags" :key="tag" class="pill">
      {{ tag }}
    </div>
    <button>Create</button>
  </form>
</template>

<script>
import { useRouter } from "vue-router";
import { ref } from "vue";
import { db,timestamp } from "@/firebase/config";

export default {
  setup() {
    let router = useRouter();
    let title = ref("");
    let body = ref("");
    let tag = ref("");
    let tags = ref([]);
    let error = ref("");
    let create = async () => {
      let newPost = {
            title: title.value,
            body: body.value,
            tags: tags.value,
            created_at: timestamp()
          };
      try {
        await db.collection("posts").add(newPost);
        router.push('/');
      } catch (err) {
        error.value = err.message;
      }
      router.push({ name: "home" });
    };
    let handlekeyDown = () => {
      if (!tags.value.includes(tag.value) && tag.value != "") {
        tags.value.push(tag.value);
      }
      tag.value = "";
    };
    return { title, body, tag, tags, create, handlekeyDown };
  },
};
</script>

<style>
form {
  max-width: 480px;
  margin: 0 auto;
  text-align: left;
}
input,
textarea {
  display: block;
  margin: 10px 0;
  width: 100%;
  box-sizing: border-box;
  padding: 10px;
  border: 1px solid #eee;
}
textarea {
  height: 160px;
}
label {
  display: inline-block;
  margin-top: 30px;
  position: relative;
  font-size: 20px;
  color: white;
  margin-bottom: 10px;
}
label::before {
  content: "";
  display: block;
  width: 100%;
  height: 100%;
  background: #ff8800;
  position: absolute;
  z-index: -1;
  padding-right: 40px;
  left: -30px;
  transform: rotateZ(-1.5deg);
}
button {
  display: block;
  margin-top: 30px;
  background: #ff8800;
  color: white;
  border: none;
  padding: 8px 16px;
  font-size: 18px;
}
.pill {
  display: inline-block;
  margin: 10px 10px 0 0;
  color: #444;
  background: #ddd;
  padding: 8px;
  border-radius: 20px;
  font-size: 14px;
}
</style>