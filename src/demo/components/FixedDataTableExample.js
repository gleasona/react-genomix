import React from 'react'
import { Cell, Column } from 'fixed-data-table-2'
import { Grid } from 'semantic-ui-react'
import { concat, without } from 'lodash'

import {
  FixedDataTable,
  CheckboxFixedCell,
  DateFixedCell,
  GeneFixedCell,
  InterpretationFixedCell,
  LinkFixedCell,
  MolecularConsequenceFixedCell,
  PublicEvidenceFixedCell,
  SexFixedCell,
  StatusFixedCell,
  TextFixedCell,
  TranscriptFixedCell,
  TurnAroundTimeProgressFixedCell,
} from 'LibIndex'


const rows = Array.from(new Array(30), (x,i) => ({
  id: i,
  checkbox: i,
  interpretation: 'benign',
  link: 'link',
  consequence: 'missense',
  text: 'Text',
  transcript: 'NM_000010.1',
  gene: [{symbol: 'PNPLA6'}],
  chromosome: '1',
  position: 10,
  reference: 'A',
  alternate: 'T',
  hgmd: 'hgmd',
  sex: 'm',
  target: 8,
  start: '1987-12-18',
  signout: '1988-08-04',
  status: 'running',
}))

const columnWidths = {
  checkbox: 100,
  interpretation: 200,
  link: 200,
  consequence: 200,
  text: 200,
  transcript: 200,
  gene: 200,
  chromosome: 200,
  position: 200,
  reference: 200,
  alternate: 200,
  hgmd: 200,
  sex: 200,
  target: 200,
  start: 200,
  signout: 200,
  status: 200,
}

const columnOrder = [
  'checkbox',
  'interpretation',
  'link',
  'consequence',
  'text',
  'transcript',
  'gene',
  'chromosome',
  'position',
  'reference',
  'alternate',
  'hgmd',
  'sex',
  'target',
  'start',
  'signout',
  'status',
]


class FixedDataTableExample extends React.PureComponent {
  state = { checked: [] }

  onCheck = (e, {value}) => {
    const { checked } = this.state

    if (checked.includes(value)) {
      this.setState({
        checked: without(checked, value)
      })
    } else {
      this.setState({
        checked: concat(checked, value)
      })
    }
  }

  render() {
    const { checked } = this.state

    return (
      <Grid padded centered>
        <Grid.Column width={16} textAlign="center">
          <FixedDataTable
            maxHeight={500}
            headerHeight={55}
            rowHeight={40}
            columnWidths={columnWidths}
            columnOrder={columnOrder}
            fixedColumns={['checkbox']}
            rowsCount={rows.length}
            showScrollbarY={false}
          >
            <Column
              columnKey="checkbox"
              header={<Cell>Checkbox</Cell>}
              cell={
                <CheckboxFixedCell
                  data={rows}
                  onChange={this.onCheck}
                  checked={checked}
                />
              }
              width={200}
              allowCellsRecycling
              pureRendering
              isReorderable
              isResizable
            />
            <Column
              columnKey="start"
              header={<Cell>Date</Cell>}
              cell={<DateFixedCell data={rows} />}
              width={200}
              allowCellsRecycling
              pureRendering
              isReorderable
              isResizable
            />
            <Column
              columnKey="gene"
              header={<Cell>Gene</Cell>}
              cell={<GeneFixedCell data={rows} />}
              width={200}
              allowCellsRecycling
              pureRendering
              isReorderable
              isResizable
            />
            <Column
              columnKey="interpretation"
              header={<Cell>Interpretation</Cell>}
              cell={<InterpretationFixedCell data={rows} />}
              width={200}
              allowCellsRecycling
              pureRendering
              isReorderable
              isResizable
            />
            <Column
              columnKey="link"
              header={<Cell>Link</Cell>}
              cell={
                <LinkFixedCell
                  data={rows}
                  idKey="id"
                  urlBuilder={(data) => `https://www.google.com/search?q=${data}`}
                />
              }
              width={200}
              allowCellsRecycling
              pureRendering
              isReorderable
              isResizable
            />
            <Column
              columnKey="consequence"
              header={<Cell>Consequence</Cell>}
              cell={<MolecularConsequenceFixedCell data={rows} />}
              width={200}
              allowCellsRecycling
              pureRendering
              isReorderable
              isResizable
            />
            <Column
              columnKey="hgmd"
              header={<Cell>Evidence</Cell>}
              cell={
                <PublicEvidenceFixedCell
                  data={rows}
                  chromosomeKey="chromosome"
                  positionKey="position"
                  referenceKey="reference"
                  alternateKey="alternate"
                  hgmdKey="hgmd"
                />
              }
              width={200}
              allowCellsRecycling
              pureRendering
              isReorderable
              isResizable
            />
            <Column
              columnKey="sex"
              header={<Cell>Sex</Cell>}
              cell={<SexFixedCell data={rows} />}
              width={200}
              allowCellsRecycling
              pureRendering
              isReorderable
              isResizable
            />
            <Column
              columnKey="status"
              header={<Cell>Status</Cell>}
              cell={<StatusFixedCell data={rows} />}
              width={200}
              allowCellsRecycling
              pureRendering
              isReorderable
              isResizable
            />
            <Column
              columnKey="text"
              header={<Cell>Text</Cell>}
              cell={<TextFixedCell data={rows} />}
              width={200}
              allowCellsRecycling
              pureRendering
              isReorderable
              isResizable
            />
            <Column
              columnKey="transcript"
              header={<Cell>Transcript</Cell>}
              cell={<TranscriptFixedCell data={rows} />}
              width={200}
              allowCellsRecycling
              pureRendering
              isReorderable
              isResizable
            />
            <Column
              columnKey="target"
              header={<Cell>TAT</Cell>}
              cell={
                <TurnAroundTimeProgressFixedCell
                  data={rows}
                  targetKey="target"
                  startKey="start"
                  signoutKey="signout"
                  compact
                />
              }
              width={200}
              allowCellsRecycling
              pureRendering
              isReorderable
              isResizable
            />
          </FixedDataTable>
        </Grid.Column>
      </Grid>
    )
  }
}


export default FixedDataTableExample
