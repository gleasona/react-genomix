import React from 'react'
import PropTypes from 'prop-types'
import { Modal } from 'semantic-ui-react'
import { get } from 'lodash'

import { Button, CancelButton, SaveForm } from 'LibIndex'


class SaveFormModal extends React.PureComponent {
  constructor(props) {
    super(props)

    this.state = {
      visible: get(props, 'open', false),
      formValues: get(props, 'defaultValues', {})
    }
  }

  onSubmit = (values) => {
    this.props.onSubmit(values)
    this.close()
  }

  open = () => {
    this.setState({ visible: true })
  }

  close = () => {
    this.setState({ visible: false })
  }

  render() {
    const trigger = React.cloneElement(this.props.trigger, {
      onClick: this.open,
    })

    return (
      <Modal
        trigger={trigger}
        open={this.state.visible}
      >
        <Modal.Header>{this.props.title}</Modal.Header>

        <Modal.Content>
          <SaveForm
            id={this.props.formId}
            onSubmit={this.onSubmit}
          >
            {this.props.children}
          </SaveForm>
        </Modal.Content>

        <Modal.Actions>
          <Button
            type="submit"
            form={this.props.formId}
            content="Save"
            icon="save"
            color="action-positive"
            inverted
          />
          <CancelButton
            onClick={this.close}
            inverted
          />
        </Modal.Actions>
      </Modal>
    )
  }
}


SaveFormModal.propTypes = {
  formId: PropTypes.string.isRequired,
  trigger: PropTypes.element.isRequired,
  title: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired,
  open: PropTypes.bool,
  defaultValues: PropTypes.shape({}),
}

SaveFormModal.defaultProps = {
  open: false,
  defaultValues: {},
}

export default SaveFormModal
