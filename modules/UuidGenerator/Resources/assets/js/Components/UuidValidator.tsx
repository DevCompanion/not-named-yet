import { validate as uuidValidate } from 'uuid';
import { version as uuidVersion } from 'uuid';
import { useState, useMemo } from "react";
// @ts-ignore
import clsx from "clsx";
// @ts-ignore
import { Input } from "@/components/ui/input";
// @ts-ignore
import { Label } from "@/components/ui/label";
export default function UuidValidator() {
  const [uuid, setUuid] = useState('');
  const isValid = useMemo(() => {
    return uuidValidate(uuid) && uuidVersion(uuid) === 4;
  }, [uuid]);

  return (
    <>
      <div className="w-full sm:max-w-xl mt-6 px-6 py-4 bg-white shadow-md overflow-hidden sm:rounded-lg">
        <div className="grid w-full items-center gap-1.5">
          <Label htmlFor="uuid-input-validator">Uuid v4 Validator</Label>
          <Input type="text" id="uuid-input-validator" placeholder="Uuid v4" value={uuid} onChange={(e) => {setUuid(e.target.value);}} />
        </div>
        {uuid && (
          <div className="flex flex-row">
            <div className="flex-grow">
              <div className={clsx(
                {
                  "text-green-600": isValid,
                  "text-red-600": !isValid,
                },
              )}
              >
                {isValid ? 'Valid' : 'Invalid'} UUID v4
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
