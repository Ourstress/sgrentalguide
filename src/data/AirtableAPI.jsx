import React, { useState, useEffect } from "react";
import Airtable from "airtable";

const AirtableAPI = () => {
  const [data, setData] = useState({ dataItems: [] });
  const base = new Airtable({
    apiKey: process.env.REACT_APP_AIRTABLEAPIKEY
  }).base("appdTzUSAOOsonnQL");

  const fetchData = async () => {
    const selection = await base("Rental")
      .select({})
      .all();
    const selectedData = selection[0].fields;
    setData({ dataItems: selectedData });
  };
  useEffect(() => {
    fetchData();
  }, []);
  return data;
};

export default AirtableAPI;
