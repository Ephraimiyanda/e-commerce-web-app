
function Profile() {
    const storedUser = localStorage.getItem("user")
    const user =JSON.parse(storedUser)
    return (
    <div> 
      
 {
    user && user.map((users)=>
    <><div className="head">
            <h1>My Account</h1>
        </div><section className="profile-box">
                <aside>
                    <ul>
                        <li><a href="">profile</a></li>
                        <li><a href="">wallet</a></li>
                        <li><a href="">saved products</a></li>
                        <li><a href="">payments</a></li>
                        <li><a href="">transaction</a></li>
                        <li><a href="">change password</a></li>
                        <li><a href="">logout</a></li>
                    </ul>
                </aside>
                <main>
                    <div className="profile-dashboard">
                        <div className="profile">
                            <div>
                                <h4>{users.username}</h4>
                                <p>Joined March,2023</p>
                                <h5>Lagos Nigeria</h5>
                            </div>
                        </div>
                        <div className="edit-btn"><button className="edit">Edit Profile</button></div>
                    </div>

                    <div className="wallet-balance">
                        <div>
                            <h4>Wallet Balance</h4>
                            <p>#5000</p>
                        </div>
                        <div>
                            <button className="fund">Fund Wallet</button>
                        </div>
                    </div>
                </main>

            </section></>
   )
 }
    </div>
    )}    
    export default Profile;