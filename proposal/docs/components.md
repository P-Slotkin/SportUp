## Component Hierarchy

**Bolded** components are associated with routes.

(:exclamation: Remember, the bolded components are created by their
associated routes, so the nesting of your bolded components must
_**exactly**_ match the nesting of your routes.)

* **App**
  * Navbar
  * GroupsIndex
    * Search
    * GroupsIndexItem
    * GroupsForm
  * **LoginForm**
  * **SignupForm**
  * **EventsIndex**
    * EventsForm
    * EventsIndexItem
    * **EventsDetail**
      * EventsComments
      * EventsRSVPs
      * EventsEditArea
      * **CommentsDetail**
        * CommentsEditArea

## Routes

* **component:** `App` **path:** `/`
  * **component** `LoginForm` **path:** /login
  * **component** `SignupForm` **path:** /signup
  * **component:** `GroupsIndex` **path:** index
  * **component:** `GroupsIndex` **path:** `groups/:groupId`
    * **component:** `GroupsDetail` **path:** `groups/:groupId`
  * **component:** `EventsIndex` **path:** none
    * **component:** `EventsDetail` **path:** `events/:eventId`

For Routes that have no `groupId`, `EventsIndex` will render all
events.
