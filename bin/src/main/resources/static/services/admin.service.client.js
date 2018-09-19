(function(){
    angular
        .module("UserDemo")
        .factory("AdminService",AdminService);


    function AdminService($http) {
    	var api = {
            "getAllUsers":getAllUsers,
            "removeUser":removeUser,
            "updateUser":updateUser
        };
        return api;
        function getAllUsers(){
        	return $http.get("/api/allusers");
        }
        function removeUser(userId) {
            return $http.delete("/api/removeUser?userId="+userId);
        }

        function updateUser(user){
          return $http.post("/api/updateUser", user);
        }


    }
})();
