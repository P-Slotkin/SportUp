# Phase 2: Flux Architecture and Group CRUD (2 days, W1 F 6pm)

## Rails
### Models
* Group
* Members

### Controllers
* Api::GroupsController (create, destroy, index, show, update)

### Views
* groups/index.json.jbuilder
* groups/show.json.jbuilder
* members/index.json.jbuilder
* members/show.json.jbuilder

## Flux
### Views (React Components)
* GroupsIndex
  - GroupsIndexItem
* GroupForm
* MembersIndex
  - MembersIndexItem

### Stores
* Group
* Member

### Actions
* `ApiActions.receiveAllGroups`
* `ApiActions.receiveSingleGroup`
* `ApiActions.deleteGroup`
* `GroupActions.fetchAllGroups`
* `GroupActions.fetchSingleGroup`
* `GroupActions.createGroup`
* `GroupActions.editGroup`
* `GroupActions.destroyGroup`
* `ApiActions.receiveAllMembersFromGroup`
* `ApiActions.receiveSingleMember`
* `ApiActions.deleteMember`
* `MemberActions.fetchAllMembersFromGroup`
* `MemberActions.fetchSingleMember`
* `MemberActions.createMember`
* `MemberActions.destroyMember`

### ApiUtil
* `ApiUtil.fetchAllGroups`
* `ApiUtil.fetchSingleGroup`
* `ApiUtil.createGroup`
* `ApiUtil.editGroup`
* `ApiUtil.destroyGroup`
* `ApiUtil.receiveAllMembersFromGroup`
* `ApiUtil.receiveSingleMember`
* `ApiUtil.deleteMember`

## Gems/Libraries
