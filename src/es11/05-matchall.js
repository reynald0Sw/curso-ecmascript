const regex = /\b(Apple)+\b/g;

const fruit = 'Apple, banaba, kiwi, coco, orange, kkk';

for (const match of fruit.matchAll(regex) ) {
    console.log(match);
}
