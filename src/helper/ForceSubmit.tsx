// src/utils/submitGoogleForm.ts
export async function submitGoogleForm(
  formActionUrl: string,
  payload: Record<string,string>
) {
  const body = new URLSearchParams(payload).toString();
  // POST without CORS concerns by sending as a <form> hack:
  const iframe = document.createElement("iframe");
  iframe.style.display = "none";
  document.body.appendChild(iframe);

  const doc = iframe.contentWindow!.document;
  doc.open();
  doc.write(`
    <form id="gform" action="${formActionUrl}" method="POST">
      ${Object.entries(payload)
        .map(([k, v]) => `<input type="hidden" name="${k}" value="${v}">`)
        .join("")}
    </form>
    <script>document.getElementById('gform').submit();</script>
  `);
  doc.close();
}
