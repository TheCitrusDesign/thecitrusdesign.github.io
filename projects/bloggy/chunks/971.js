"use strict";
exports.id = 971;
exports.ids = [971];
exports.modules = {

/***/ 1971:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "uk": () => (/* binding */ getAllAuthors),
  "Bd": () => (/* binding */ getAllPosts),
  "Ys": () => (/* binding */ getAllTags),
  "ye": () => (/* binding */ getAuthorBySlug),
  "QV": () => (/* binding */ getNextPost),
  "zQ": () => (/* binding */ getPostBySlug),
  "J4": () => (/* binding */ getPostsByTag),
  "O2": () => (/* binding */ getPreviousPost)
});

// UNUSED EXPORTS: getPostSlugs, getSearchPosts

// EXTERNAL MODULE: external "fs"
var external_fs_ = __webpack_require__(7147);
var external_fs_default = /*#__PURE__*/__webpack_require__.n(external_fs_);
// EXTERNAL MODULE: external "path"
var external_path_ = __webpack_require__(1017);
// EXTERNAL MODULE: external "gray-matter"
var external_gray_matter_ = __webpack_require__(8076);
var external_gray_matter_default = /*#__PURE__*/__webpack_require__.n(external_gray_matter_);
;// CONCATENATED MODULE: ./core/helpers/arrayHelpers.ts
function lowercaseArrayOfStrings(array) {
    return array.map((el)=>el.toLowerCase());
}

// EXTERNAL MODULE: ./core/constants.ts
var constants = __webpack_require__(9463);
;// CONCATENATED MODULE: ./core/helpers/reading-time.ts

function readingTime(content) {
    const WPS = constants/* WORDS_PER_MINUTE */.UJ / 60;
    var images = 0;
    const regex = /\w/;
    let words = content.split(" ").filter((word)=>{
        if (word.includes("<img")) {
            images += 1;
        }
        return regex.test(word);
    }).length;
    var imageAdjust = images * 4;
    var imageSecs = 0;
    var imageFactor = 12;
    while(images){
        imageSecs += imageFactor;
        if (imageFactor > 3) {
            imageFactor -= 1;
        }
        images -= 1;
    }
    const minutes = Math.ceil(((words - imageAdjust) / WPS + imageSecs) / 60);
    return minutes;
}

;// CONCATENATED MODULE: ./core/helpers/api.ts





const postsDirectory = (0,external_path_.join)(process.cwd(), "_posts");
const authorsDirectory = (0,external_path_.join)(process.cwd(), "_authors");
function getPostSlugs() {
    return external_fs_default().readdirSync(postsDirectory);
}
function getPostBySlug(slug, fields = []) {
    const realSlug = slug.replace(/\.md$/, "");
    const fullPath = (0,external_path_.join)(postsDirectory, `${realSlug}.md`);
    const fileContents = external_fs_default().readFileSync(fullPath, "utf8");
    const { data , content  } = external_gray_matter_default()(fileContents);
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
    const filenames = external_fs_default().readdirSync(authorsDirectory);
    return filenames.map((filename)=>{
        const file = external_fs_default().readFileSync((0,external_path_.join)(authorsDirectory, filename), "utf8");
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
    const path = (0,external_path_.join)(authorsDirectory, `${slug}.json`);
    const file = external_fs_default().readFileSync(path, "utf8");
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


/***/ })

};
;