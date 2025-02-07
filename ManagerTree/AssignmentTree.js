var AssignmentTree = (function () {
  var Events = {
    /**
     * @event FETCHING_CHILD_NODES
     * This event is fired when this tree begins to fetch child nodes for an assignment group.
     * @param {AssignmentTree} assignmentTree this
     * @param {String} nodeId the id of the assignment group node for which child nodes are being fetched.
     */
    FETCHING_CHILD_NODES: "fetchingChildNodes",

    /**
     * @event DONE_FETCHING_CHILD_NODES
     * This event is fired when this tree has finished fetching child nodes for an assignment group.
     * @param {AssignmentTree} assignmentTree this
     * @param {String} nodeId the id of the assignment group node for which child nodes have been fetched.
     */
    DONE_FETCHING_CHILD_NODES: "doneFetchingChildNodes",

    /**
     * @event SELECTION_CHANGED
     * This event is fired when a multiSelect-enabled assignment tree's selection has changed.
     * @param {AssignmentTree} assignmentTree this
     */
    SELECTION_CHANGED: "selectionChanged",

    /**
     * @event REQUESTING_SELECTED_EMPLOYEE_NODES
     * This event is fired when a multiSelect-enabled assignment tree sends a request to the server for nodes
     * that had not yet been loaded, but that the user has selected.
     * @param {AssignmentTree} assignmentTree this
     */
    REQUESTING_SELECTED_EMPLOYEE_NODES: "requestingSelectedEmployeeNodes",

    /**
     * @event FINISHED_REQUESTING_SELECTED_EMPLOYEE_NODES
     * This event is fired when a multiSelect-enabled assignment tree has heard back from the server after a request for nodes
     * that had not yet been loaded, but that the user had selected.
     * @param {AssignmentTree} assignmentTree this
     */
    FINISHED_REQUESTING_SELECTED_EMPLOYEE_NODES:
      "finishedRequestingSelectedEmployeeNodes",
  };

  var $this = Ext.extend("Ext.tree.TreePanel", {
    assignmentGroups: null,
    multiSelect: false,
    crewGroups: null,
    maxEmployeesToShow: null,
    defaultUIProvider: Ext.tree.TreeNodeUI,
    customComparator: null,
    initComponent: function () {
    }
  });
  return $this;
})();
