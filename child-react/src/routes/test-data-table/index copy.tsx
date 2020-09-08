// // import React, { Component } from 'react';
// // import { DataTable } from 'primereact/datatable';
// // import { Column } from 'primereact/column';
// // import { Button } from 'primereact/button';

// // class TestDataTable extends Component<any, { cars: Array<any> }> {

// //   state = {
// //     cars: [{}],
// //   };

// //   colorTemplate(rowData: any, column: any) {
// //     return <span style={{ color: rowData['color'] }}>{rowData['color']}</span>;
// //   }

// //   brandTemplate(rowData: any, column: any) {
// //     var src = "showcase/resources/demo/images/car/" + rowData.brand + ".png";
// //     return <img src={src} alt={rowData.brand} width="48px" />;
// //   }

// //   test = (rowData: any, column: any) => {
// //     console.log('rowData', rowData);
// //     console.log('column', column);
// //   }

// //   actionTemplate(rowData: any, column: any) {
// //     return <div>
// //       <Button type="button" icon="pi pi-search" onClick={() => this.test(rowData, column)} className="p-button-success" style={{ marginRight: '.5em' }}></Button>
// //       <Button type="button" icon="pi pi-pencil" className="p-button-warning"></Button>
// //     </div>;
// //   }

// //   componentDidMount() {
// //     this.brandTemplate = this.brandTemplate.bind(this);
// //     this.colorTemplate = this.colorTemplate.bind(this);
// //     this.actionTemplate = this.actionTemplate.bind(this);

// //     const data = [
// //       {
// //         vin: 'fdasfasdf',
// //         year: 2013,
// //         brand: 'Tesla',
// //         color: 'red',
// //       },
// //       {
// //         vin: '5356',
// //         year: 2013,
// //         brand: 'Tesla',
// //         color: 'red',
// //       },
// //       {
// //         vin: 'gsdgsdg',
// //         year: 2013,
// //         brand: 'Ford',
// //         color: 'yellow',
// //       },
// //       {
// //         vin: '6346346',
// //         year: 2020,
// //         brand: 'Tesla',
// //         color: 'blue',
// //       },
// //     ];
// //     this.setState({ cars: data });
// //   }

// //   render() {
// //     var carCount = this.state.cars ? this.state.cars.length : 0;
// //     var header = <div className="p-clearfix" style={{ 'lineHeight': '1.87em' }}>List of Cars <Button icon="pi pi-refresh" style={{ 'float': 'right' }} /></div>;
// //     var footer = "There are " + carCount + ' cars';

// //     return (
// //       <div>
// //         <div className="content-section introduction">
// //           <div className="feature-intro">
// //             <h1>DataTable - Templating</h1>
// //             <p>Custom content at header, body and footer sections are supported via templating.</p>
// //           </div>
// //         </div>

// //         <div className="content-section implementation">
// //           <DataTable value={this.state.cars} header={header} footer={footer}>
// //             <Column field="vin" header="Vin" />
// //             <Column field="year" header="Year" />
// //             <Column field="brand" header="Brand" body={this.brandTemplate} style={{ textAlign: 'center' }} />
// //             <Column field="color" header="Color" body={this.colorTemplate} />
// //             <Column body={this.actionTemplate} style={{ textAlign: 'center', width: '8em' }} />
// //           </DataTable>
// //         </div>
// //       </div>
// //     );
// //   }
// // }

// // export default TestDataTable;

// import React, { Component } from 'react';
// import { DataTable } from 'primereact/datatable';
// import { Column } from 'primereact/column';

// class TestDataTable extends Component<any, any> {

//   state = {
//     cars: [],
//     selectedCar1: [],
//     selectedCar2: [],
//     selectedCars3: [],
//   };

//   componentDidMount() {
//     const data = [
//       {
//         vin: 'fdasfasdf',
//         year: 2013,
//         brand: 'Tesla',
//         color: 'red',
//       },
//       {
//         vin: '5356',
//         year: 2013,
//         brand: 'Tesla',
//         color: 'red',
//       },
//       {
//         vin: 'gsdgsdg',
//         year: 2013,
//         brand: 'Ford',
//         color: 'yellow',
//       },
//       {
//         vin: '6346346',
//         year: 2020,
//         brand: 'Tesla',
//         color: 'blue',
//       },
//     ];
//     this.setState({ cars: data });
//   }

//   displaySelection(data: any) {
//     if (!data || data.length === 0) {
//       return <div style={{ textAlign: 'left' }}>No Selection</div>;
//     }
//     else {
//       if (data instanceof Array)
//         return <ul style={{ textAlign: 'left', margin: 0 }}>{data.map((car, i) => <li key={car.vin}>{car.vin + ' - ' + car.year + ' - ' + car.brand + ' - ' + car.color}</li>)}</ul>;
//       else
//         return <div style={{ textAlign: 'left' }}>Selected Car: {data.vin + ' - ' + data.year + ' - ' + data.brand + ' - ' + data.color}</div>
//     }
//   }

//   render() {
//     return (
//       <div>
//         <div className="content-section introduction">
//           <div className="feature-intro">
//             <h1>DataTable</h1>
//             <p>DataTable provides single and multiple selection modes on click of a row. Selected rows are bound to the selection property and onRowSelect-onRowUnselect
//                             events are provided as optional callbacks. In addition built-in radio button and checkbox based selections are available as alternatives.</p>
//           </div>
//         </div>

//         <div className="content-section implementation">
//           <h3>Single</h3>
//           <p>In single mode, a row is selected on click event of a row. If the row is already selected then the row gets unselected.</p>
//           <DataTable value={this.state.cars} selectionMode="single" header="Single Selection" footer={this.displaySelection(this.state.selectedCar1)}
//             selection={this.state.selectedCar1} onSelectionChange={e => this.setState({ selectedCar1: e.value })}>
//             <Column field="vin" header="Vin" />
//             <Column field="year" header="Year" />
//             <Column field="brand" header="Brand" />
//             <Column field="color" header="Color" />
//           </DataTable>

//           <h3>Multiple</h3>
//           <p>In multiple mode, selection binding should be an array. For touch enabled devices, selection is managed by tapping and for other devices metakey or shiftkey are required.
//           Setting metaKeySelection property as false enables multiple selection without meta key.
//                     </p>
//           <DataTable value={this.state.cars} selectionMode="multiple" header="Multiple Selection with MetaKey" footer={this.displaySelection(this.state.selectedCars1)}
//             selection={this.state.selectedCars1} onSelectionChange={e => this.setState({ selectedCars1: e.value })}>
//             <Column field="vin" header="Vin" />
//             <Column field="year" header="Year" />
//             <Column field="brand" header="Brand" />
//             <Column field="color" header="Color" />
//           </DataTable>

//           <DataTable value={this.state.cars} selectionMode="multiple" header="Multiple Selection without MetaKey" footer={this.displaySelection(this.state.selectedCars2)}
//             selection={this.state.selectedCars2} onSelectionChange={e => this.setState({ selectedCars2: e.value })} style={{ marginTop: '2em' }} metaKeySelection={false}>
//             <Column field="vin" header="Vin" />
//             <Column field="year" header="Year" />
//             <Column field="brand" header="Brand" />
//             <Column field="color" header="Color" />
//           </DataTable>

//           <h3>RadioButton</h3>
//           <p>Single selection can also be handled using radio buttons by enabling the selectionMode property of column as "single".</p>
//           <DataTable value={this.state.cars} header="Single Selection" footer={this.displaySelection(this.state.selectedCar2)}
//             selection={this.state.selectedCar2} onSelectionChange={e => this.setState({ selectedCar2: e.value })}>
//             <Column selectionMode="single" style={{ width: '2em' }} />
//             <Column field="vin" header="Vin" />
//             <Column field="year" header="Year" />
//             <Column field="brand" header="Brand" />
//             <Column field="color" header="Color" />
//           </DataTable>

//           <h3>Checkbox</h3>
//           <p>Multiple selection can also be handled using checkboxes by enabling the selectionMode property of column as "multiple".</p>
//           <DataTable value={this.state.cars} header="Single Selection" footer={this.displaySelection(this.state.selectedCars3)}
//             selection={this.state.selectedCars3} onSelectionChange={e => {
//               console.log('e', e);
//               this.setState({ selectedCars3: e.value })
//             }}>
//             <Column selectionMode="multiple" style={{ width: '2em' }} />
//             <Column field="vin" header="Vin" />
//             <Column field="year" header="Year" />
//             <Column field="brand" header="Brand" />
//             <Column field="color" header="Color" />
//           </DataTable>
//         </div>

//       </div>
//     );
//   }
// }

// export default TestDataTable;
