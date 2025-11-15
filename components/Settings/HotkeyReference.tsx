const HotkeyReference = ({
  hotkeys,
}: {
  hotkeys: { key: string; action: string }[];
}) => {
  return (
    <div className="max-w-md">
      <h5 className="text-lg mb-2">Hotkey Reference</h5>
      <div className="overflow-x-auto">
        <table className="min-w-full rounded-lg overflow-hidden">
          <thead className="bg-[var(--card)]">
            <tr>
              <th className="px-4 py-2 text-left bg-[var(--border)]">
                Key
              </th>
              <th className="px-4 py-2 text-left bg-[var(--border)]">
                Action
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-[var(--border)]">
            {hotkeys.map((hotkey, index) => (
              <tr
                key={index}
                className={'bg-[var(--card)]'}
              >
                <td className="px-4 py-3 font-mono  bg-[var(--card)]">
                  <kbd className="px-2 py-1 bg-[var(--border)] rounded-md">
                    {hotkey.key}
                  </kbd>
                </td>
                <td className="px-4 py-2">{hotkey.action}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default HotkeyReference;
