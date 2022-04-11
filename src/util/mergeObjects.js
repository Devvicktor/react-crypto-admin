// algorittm to merge objects by id

const mergeById = (data1, data2) => {
  console.log("DATA1", data1);
  console.log("DATA2", data2);
  const merged = [];
  data1.forEach((item) => {
    const match = data2.find((item2) => item2.id === item.id);
    if (match) {
      merged.push({ ...item, ...match });
    }
  });
  return merged;
};

export default mergeById;
