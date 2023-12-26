import { createViewerToken } from "@/actions/token";
import { useEffect, useState } from "react";
import { jwtDecode, JwtPayload } from "jwt-decode";
import { toast } from "sonner";

export const useViewerToken = (hostId: string) => {
  const [token, setToken] = useState("");
  const [name, setName] = useState("");
  const [identity, setIdentity] = useState("");

  useEffect(() => {
    const createToken = async () => {
      try {
        const viewerToken = await createViewerToken(hostId);
        setToken(viewerToken);

        const decodedToken = jwtDecode(viewerToken) as JwtPayload & { name?: string };
        const name = decodedToken.name;
        const identity = decodedToken.jti;

        if (name) {
          setName(name);
        }

        if (identity) {
          setIdentity(identity);
        }
      } catch {
        toast.error("Something went wrong!");
      }
    };
    createToken();
  }, [hostId]);

  return {
    token,
    name,
    identity,
  };
};
