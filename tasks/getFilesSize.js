let fileSizes = {
  testFile1: 65,
  testFile2: 48,
};

function getFileSize(filename, cb) {
  setTimeout(() => cb(fileSizes[filename]), Math.random() * 500);
}

function sumFileSizes(filename1, filename2, cb) {
  getFileSize(filename1, function (size1) {
    getFileSize(filename2, function (size2) {
      cb(size1 + size2);
    });
  });
};
// вызываем в sumFileSize getFileSize, в котором вторым аргументом пережаем функцию, в которой делаем тоже самое и там вызываем cb с суммой
