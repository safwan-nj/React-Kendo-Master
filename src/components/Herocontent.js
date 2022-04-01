import React from "react";
import "@progress/kendo-theme-material/dist/all.css";
import { Grid, GridColumn } from "@progress/kendo-react-grid";
import { process } from "@progress/kendo-data-query";

import { prods } from "../data/products";

const BooleanCell = (props) => {
  return (
    <td>{props.dataItem[props.field] ? '✅' : '❌'}</td>
  )
}

function Herocontent() {
  const [dataState, setDataState]   = React.useState({ skip: 0, take: 10 })
  const [result, setResult]         = React.useState(process(prods, dataState));
  const onDataStateChange           = (event) =>  {
                                                    setDataState(event.dataState);
                                                    setResult(process(prods, event.dataState));
                                                  }

  return (
    <>
      <Grid data={result} filterable={true} onDataStateChange={onDataStateChange} pageable={true} total={prods.length} {...dataState} >
    
        <GridColumn     field="ProductID"           title="ID"                                      />
        <GridColumn     field="ProductName"         title="Product Name"                            />
        <GridColumn     field="CategoryID"          title="Category ID"                             />
        <GridColumn     field="QuantityPerUnit"     title="Quantity PerUnit"                        />
        <GridColumn     field="UnitPrice"           title="Unit Price"                              />
        <GridColumn     field="UnitsInStock"        title="Units In Stock"                          />
        <GridColumn     field="Discontinued"        title="Discontinued"         cell={BooleanCell} />
    
      </Grid>
    </>
  );
}

export default Herocontent;