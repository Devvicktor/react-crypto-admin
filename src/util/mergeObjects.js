// algorittm to merge objects by id

export const mergeById = (data1, data2) => {
  return data1.reduce((acc, item) => {
    const match = data2.find((item2) => item2.asset_id === item.asset_id);
    if (match) {
      acc.push({ ...item, ...match });
    }
    return acc;
  }, []);
};

export const mergeExchangesById = (data1, data2) => {
  return data1.reduce((acc, item) => {
    const match = data2.find((item2) => item2.exchange_id === item.exchange_id);
    if (match) {
      acc.push({ ...item, ...match });
    }
    return acc;
  }, []);
};
