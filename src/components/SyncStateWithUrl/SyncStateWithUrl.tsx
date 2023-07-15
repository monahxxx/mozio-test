import { useField } from "formik";
import React, { FC, useEffect } from "react";
import { useSearchParamsState } from "./hooks";

interface SyncStateWithUrlProps {
  name: string;
  children: React.ReactNode;
}

export const SyncStateWithUrl: FC<SyncStateWithUrlProps> = ({
  name,
  children,
}) => {
  const [, setSearchParams] = useSearchParamsState(name);
  const [{ value }] = useField(name);

  useEffect(() => {
    setSearchParams(value);
  }, [value]);

  return <>{children}</>;
};
