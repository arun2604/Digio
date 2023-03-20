import { GoogleLoginButton } from "react-social-login-buttons";
import { LoginSocialGoogle } from "reactjs-social-login";

const GoogleLogin = () => {
  return (
    <div>
      <LoginSocialGoogle
        client_id={"23721607191-2l5n5omfbvt2ffug8vvjifpog1b3m6k0.apps.googleusercontent.com"}
        scope="openid profile email"
        discoveryDocs="claims_supported"
        access_type="offline"
        onResolve={({ provider, data }) => {
          console.log(provider, data);
        }}
        onReject={(err) => {
          console.log(err);
        }}
      >
        <GoogleLoginButton />
      </LoginSocialGoogle>
    </div>
  )
}

export default GoogleLogin