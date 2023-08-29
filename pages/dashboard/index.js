import { useSession, signIn, signOut } from "next-auth/react"
import 'bootstrap/dist/css/bootstrap.min.css';
import Link from 'next/link';
import { useRouter } from "next/router";

export async function getStaticProps() {
  const res = await fetch('https://09fb-49-229-108-182.ngrok-free.app/api/users')
  const posts = await res.json()

  return {
    props: {
      posts,
    },
  }
}

export default function Component({ posts }) {
  const { data: session } = useSession()
  const router = useRouter()

const handleDelete = async (id) => {
  //console.log("ID : ", id);
  fetch('https://09fb-49-229-108-182.ngrok-free.app/api/users?id=' + id, {
    method: 'DELETE',
  })
  return router.reload('/dashbord')
}


  if (session) {
    return (
      <>

            <nav class="navbar bg-warning" >
              <div class="container-fluid">
              <a class="navbar-brand" href="#">Navbar</a>
                {/* Signed in as {session.user.email} <br /> */}
              <div class="right">
                {session.user.fname}  {session.user.lname} <br />
              </div>
                <button class="btn btn-danger"   onClick={() => signOut()}>Sign out</button>
              </div>
            </nav>
            

          <div className="container my-4">
            <div class="d-grid gap-2 d-md-flex justify-content-md-end">
              {/* <button className="btn btn-success ">Add Member</button> */}
              <Link   Link className="btn btn-success" href="dashboard/frmUser">Add Member</Link>
            </div>
            
            <div className="table-responsive mt-4">
            <nav class="navbar bg-body-tertiary">
              <a class="navbar-brand" href="#">Member Li</a>
              <table className="table table-bordered table-striped">
                <thead>
                  <tr>
                    <th>No</th>
                    <th>Student ID</th>
                    <th>FirstName</th>
                    <th>LastName</th>
                    <th>Username</th>
                    <th>Password</th>
                    <th>Status</th>
                    <th><center>Edit/Delete</center></th>
                  </tr>
                </thead>
                <tbody>
                  {posts.users.map((post, i) => (
                    <tr key={post.id}>
                      <td>{i+1}</td>
                      <td>{post.studentid}</td>
                      <td>{post.firstname}</td>
                      <td>{post.lastname}</td>
                      <td>{post.username}</td>
                      <td>{post.password}</td>
                      <td>{post.status}</td>
                      
                      <div>
                        <center>
                        <button type="button" className="btn btn-warning">
                          <i className="bi bi-pencil-square"></i>
                        </button>{" "}&nbsp;&nbsp;
                        <button type="button" className="btn btn-danger" onClick={() => handleDelete(post.id)}>
                          <i className="bi bi-trash3"></i>
                        </button>{" "}
                        </center>
                      </div>
                    </tr>
                  ))}
                </tbody>
              </table>
              </nav>
            </div>
          </div>
      </>
    )
  }
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col">
            Not signed in <br />
            <button onClick={() => signIn()}>Sign in</button>
          </div>
        </div>
      </div>
    </>
  )
}