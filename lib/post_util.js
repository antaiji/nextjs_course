import fs from "fs";
import path from "path";

import matter from "gray-matter";

const postDirectory = path.join(process.cwd(), "posts");

export function getPostsFiles() {
  return fs.readdirSync(postDirectory);
}

export function getPostData(postIdentifier) {
  // get slug by removing file extension from file name
  const postSlug = postIdentifier.replace(/\.md$/, "");
  // read file content
  const filePath = path.join(postDirectory, `${postSlug}.md`);
  const fileContent = fs.readFileSync(filePath, "utf-8");
  // split markdown to 'data' - metadata object and 'content' string
  const { data, content } = matter(fileContent);

  const postData = {
    slug: postSlug,
    ...data,
    content: content,
  };

  return postData;
}

export function getAllPosts() {
  // read directory content and return array of files
  const postFiles = getPostsFiles();
  // get the array of all posts objects
  const allPosts = postFiles.map((postFile) => {
    return getPostData(postFile);
  });
  // sort posts by date
  const sortedPosts = allPosts.sort((postA, postB) =>
    postA.date > postB.date ? -1 : 1
  );

  return sortedPosts;
}

export function getFeaturedPosts() {
  const allPosts = getAllPosts();

  const featuredPosts = allPosts.filter((post) => post.isFeatured);

  return featuredPosts;
}
