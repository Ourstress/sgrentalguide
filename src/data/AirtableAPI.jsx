import { useState, useEffect } from "react";
import Airtable from "airtable";

const AirtableAPI = selectedBase => {
  const [data, setData] = useState({ dataItems: [] });
  const baseData = {
    Rental: { baseID: "appdTzUSAOOsonnQL", baseName: "Rental" }
  };
  const base = new Airtable({
    apiKey: process.env.REACT_APP_AIRTABLEAPIKEY
  }).base(baseData[selectedBase].baseID);

  const fetchAllData = async () => {
    const selection = await base(baseData[selectedBase].baseName)
      .select({})
      .all();
    console.log(selection);
    const selectedData = selection.map(dataItem => {
      const requiredData = dataItem.fields;
      requiredData.id = dataItem.id;
      return requiredData;
    });
    setData({ dataItems: selectedData });
  };
  useEffect(() => {
    fetchAllData();
  }, []);
  return data;
};

export default AirtableAPI;
