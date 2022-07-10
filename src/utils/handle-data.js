export function handleSongsCategory(data) {
  // 1.获取所有的类别
  const category = data.categories;

  // 2.创建类别数据结构
  const categoryData = Object.entries(category).map(([key, value]) => {
    return {
      name: value,
      subs: [],
    };
  });

  // 3.将subs添加到对应的类别中
  for (let item of data.sub) {
    categoryData[item.category].subs.push(item);
  }

  return categoryData;
}

// 获取歌手字母类别
export function generateSingerAlpha() {
  var alphabets = ["-1"];
  var start = "A".charCodeAt(0);
  var last = "Z".charCodeAt(0);
  for (var i = start; i <= last; ++i) {
    alphabets.push(String.fromCharCode(i));
  }

  alphabets.push("0");

  return alphabets;
}

//传入三个参数，第一个是获取到的所有数据，第二个是选中后获取到的数组，存放了
// 数据的id，第三个是最终获取选中的对象，用于展示在选中列表里
export function getSelectValue(allArray, selectArray, endValue) {
  allArray.forEach((item, i) => {
    selectArray.forEach((index) => {
      if (item.nickname === index) {
        endValue.push(item);
        allArray.splice(i, 1);
      }
    });
  });
}

export const singerAlphas = generateSingerAlpha();
