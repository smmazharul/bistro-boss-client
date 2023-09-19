/* ---------------------------
            BASIC
   ---------------------------
* 1. do not show the link to them who should not see it
*    only show to the person/types of user who should see it 
* 2. Do not allow to visit the link by typing on hte url
*use AdminRoute that will check whether the user is admin or not 
*---------------------------
* TO SEND DATA
*---------------------------
* 1. verify jwt token(send authorization token in the header to the server)
*   IF possible use axios send jwt token by intercepting the request
* 2. if it is an admin activity. make sure only admin user is posting data by using verifyAdmin;
*   by using verifyAdmin
*
*
*
*
*
*/