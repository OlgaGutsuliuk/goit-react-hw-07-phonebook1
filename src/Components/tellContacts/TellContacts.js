import React, { Component } from "react";
import ContactsForm from "./contactsForm/ContactsForm";
import ContactsList from "./contactsList/ContactsList";
import TelContactFilter from "./telContactFilter/TelContactFilter";
import { connect } from "react-redux";
import { addContactsOperation, deleteContactsOperation, getAllClientsOperation } from "../../redux/tellContactsOperations";
import { filterContacts } from "../../redux/tellContactsAction";
import { errorContactsSelector, filterContactsSelector, getContactsSelector, loaderContactsSelector, getFilterContacts } from "../../redux/tellContactsSelectors";

class TellContacts extends Component {
  async componentDidMount() {
    this.props.getAllClientsOperation();
  }

  addContacts = async contact => {
    this.props.addContactsOperation(contact);
  };

  deleteContacts = async e => {
    const { id } = e.target;
    this.props.deleteContactsOperation(id);
  };

  checkDublicateName = name => {
    return this.props.contacts.some(contact => contact.name === name);
  };

  setFilter = e => {
    const { value } = e.target;
    this.props.filterContacts(value);
  };
 
  render() {
    return (
      <>
        {this.props.error && <h2>{this.props.error}</h2>}
        {this.props.isLoading && <h2>Loading....</h2>}
        <ContactsForm addTelContact={this.addContacts} checkDublicateName={this.checkDublicateName}/>
        <TelContactFilter filter={this.props.filter} setFilter={this.setFilter} />

        <ContactsList telNumbers={this.props.filteredContacts} deleteTelContact={this.deleteContacts} />
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    contacts: getContactsSelector(state),
    isLoading: loaderContactsSelector(state),
    error: errorContactsSelector(state),
    filter: filterContactsSelector(state),
    filteredContacts: getFilterContacts(state)
  };
};

const mapDispatchToProps = {
  getAllClientsOperation,
  addContactsOperation,
  deleteContactsOperation,
  filterContacts
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TellContacts);
