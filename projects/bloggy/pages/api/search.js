(() => {
var exports = {};
exports.id = 198;
exports.ids = [198];
exports.modules = {

/***/ 624:
/***/ (() => {



/***/ }),

/***/ 4154:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ search)
});

;// CONCATENATED MODULE: external "fs"
const external_fs_namespaceObject = require("fs");
;// CONCATENATED MODULE: external "path"
const external_path_namespaceObject = require("path");
;// CONCATENATED MODULE: external "gray-matter"
const external_gray_matter_namespaceObject = require("gray-matter");
;// CONCATENATED MODULE: ./core/helpers/api.ts





const postsDirectory = (0,external_path_namespaceObject.join)(process.cwd(), "_posts");
const authorsDirectory = (0,external_path_namespaceObject.join)(process.cwd(), "_authors");
function getPostSlugs() {
    return fs.readdirSync(postsDirectory);
}
function getPostBySlug(slug, fields = []) {
    const realSlug = slug.replace(/\.md$/, "");
    const fullPath = join(postsDirectory, `${realSlug}.md`);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { data , content  } = matter(fileContents);
    const items = {};
    // Ensure only the minimal needed data is exposed
    fields.forEach((field)=>{
        if (field === "slug") {
            items[field] = realSlug;
        }
        if (field === "content") {
            items[field] = content;
        }
        if (field === "readingTime") {
            items[field] = `${readingTime(content)} minutes read`;
        }
        if (typeof data[field] !== "undefined") {
            items[field] = data[field];
        }
    });
    return items;
}
function getAllPosts(fields = []) {
    const slugs = getPostSlugs();
    const posts = slugs.map((slug)=>getPostBySlug(slug, fields))// sort posts by date in descending order
    .sort((post1, post2)=>post1.date > post2.date ? -1 : 1);
    return posts;
}
function getAllTags() {
    const allPosts = getAllPosts([
        "slug",
        "tags"
    ]);
    const filterTags = lowercaseArrayOfStrings(allPosts.map((post)=>post?.tags).flat());
    const allTags = filterTags.filter((item, pos)=>filterTags.indexOf(item) == pos);
    return allTags;
}
function getPostsByTag(tag, fields = []) {
    return getAllPosts(fields).filter((post)=>{
        const { tags  } = post;
        return tags && lowercaseArrayOfStrings(tags).includes(tag);
    });
}
function getAllAuthors() {
    const filenames = fs.readdirSync(authorsDirectory);
    return filenames.map((filename)=>{
        const file = fs.readFileSync(join(authorsDirectory, filename), "utf8");
        const data = JSON.parse(file);
        const slug = filename.replace(/\.json/, "");
        return {
            ...data,
            slug,
            permalink: `${slug}`,
            profilePictureUrl: `${slug}.jpg`
        };
    });
}
function getAuthorBySlug(slug) {
    // get slug from filename
    const path = join(authorsDirectory, `${slug}.json`);
    const file = fs.readFileSync(path, "utf8");
    const data = JSON.parse(file);
    return {
        ...data,
        slug,
        permalink: `${slug}`,
        profilePictureUrl: `${slug}.jpg`
    };
}
/** Search bar */ function getSearchPosts() {
    const fileNames = fs.readdirSync(postsDirectory);
    const allPostsData = fileNames.map((fileName)=>{
        const slug = fileName.replace(/\.md$/, "");
        const fullPath = join(postsDirectory, fileName);
        const fileContents = fs.readFileSync(fullPath, "utf8");
        const matterResult = matter(fileContents);
        return {
            slug,
            ...matterResult.data
        };
    });
    return allPostsData;
}
/** Used for pagination */ function getNextPost(slug) {
    const allPosts = getAllPosts([
        "title",
        "slug",
        "date",
        "coverImage"
    ]);
    const index = allPosts.map((post)=>post.slug).indexOf(slug);
    if (index === allPosts.length - 1 || index === -1) return null;
    return allPosts[index + 1];
}
function getPreviousPost(slug) {
    const allPosts = getAllPosts([
        "title",
        "slug",
        "date",
        "coverImage"
    ]);
    const index = allPosts.map((post)=>post.slug).indexOf(slug);
    if (index === 0 || index === -1) return null;
    return allPosts[index - 1];
}

;// CONCATENATED MODULE: ./pages/api/search.js

const posts =  true ? (__webpack_require__(624).posts) : 0;
/* harmony default export */ const search = ((req, res)=>{
    const results = req.query.q ? posts.filter((post)=>post.slug.toLowerCase().includes(req.query.q)) : [];
    res.statusCode = 200;
    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify({
        results
    }));
});


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(4154));
module.exports = __webpack_exports__;

})();