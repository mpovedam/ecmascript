const regex = /\b(Apple)+\b/g;

const fruit = 'Apple, Bannana Kiwi, Appe, Orange, etc. etc. etc';

for(const match of fruit.matchAll(regex)){
    console.log(match);
}


const regex = /\b(White)+\b/g;

const colors = 'Red, Green, Yellow, Black, White, Grey';

for (const match of colors.matchAll(regex)){
 console.log(match);
}