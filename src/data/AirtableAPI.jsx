import { useState, useEffect } from "react";
import Airtable from "airtable";

const baseData = {
  Rental: { baseID: "appdTzUSAOOsonnQL", baseName: "Rental" }
};

export const fetchAllData = selectedBase => {
  const [data, setData] = useState({ dataItems: [] });

  const base = new Airtable({
    apiKey: process.env.REACT_APP_AIRTABLEAPIKEY
  }).base(baseData[selectedBase].baseID);

  const fetchAllDataFunction = async () => {
    const selection = await base(baseData[selectedBase].baseName)
      .select({})
      .all();
    const selectedData = selection.map(dataItem => {
      const requiredData = dataItem.fields;
      requiredData.id = dataItem.id;
      return requiredData;
    });
    setData({ dataItems: selectedData });
  };
  useEffect(() => {
    fetchAllDataFunction();
  }, []);
  return data;
};

export const updateEntry = (selectedBase, itemID, updatedEntry) => {
  const base = new Airtable({
    apiKey: process.env.REACT_APP_AIRTABLEAPIKEY
  }).base(baseData[selectedBase].baseID);

  base(baseData[selectedBase].baseName).replace(itemID, updatedEntry);
};
