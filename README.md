import fitz  # PyMuPDF
import pandas as pd
import re

def extract_data_from_pdf(pdf_path):
    # Open the PDF file
    doc = fitz.open(pdf_path)
    extracted_data = []

    for page_num in range(len(doc)):
        page = doc[page_num]
        text = page.get_text()

        # Extract relevant fields using regex
        issue_match = re.search(r"Issue:\s*(.+)", text)
        root_cause_match = re.search(r"Root Cause:\s*(.+)", text)
        impact_match = re.search(r"Impact:\s*(.+)", text)
        recommendation_match = re.search(r"Recommendation:\s*(.+)", text)
        accountable_contact_match = re.search(r"Accountable Contact:\s*(.+)", text)
        remediation_date_match = re.search(r"Agreed Remediation Date:\s*(.+)", text)

        # Append the data if all fields are found
        if issue_match and root_cause_match and impact_match:
            extracted_data.append({
                "Issue": issue_match.group(1).strip(),
                "Root Cause": root_cause_match.group(1).strip(),
                "Impact": impact_match.group(1).strip(),
                "Recommendation": recommendation_match.group(1).strip() if recommendation_match else "N/A",
                "Accountable Contact": accountable_contact_match.group(1).strip() if accountable_contact_match else "N/A",
                "Agreed Remediation Date": remediation_date_match.group(1).strip() if remediation_date_match else "N/A"
            })

    # Close the document
    doc.close()
    return extracted_data

# Specify the PDF file path
pdf_path = "path_to_your_pdf_file.pdf"

# Extract data
data = extract_data_from_pdf(pdf_path)

# Convert to a DataFrame
df = pd.DataFrame(data)

# Save the data to an Excel file for further use
output_file = "extracted_audit_data.xlsx"
df.to_excel(output_file, index=False)

print(f"Data extracted and saved to {output_file}")
