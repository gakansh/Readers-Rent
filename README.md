import fitz  # PyMuPDF for handling PDFs
import pandas as pd
import re
from tkinter import Tk
from tkinter.filedialog import askopenfilename, asksaveasfilename

def open_pdf_file():
    """
    Opens a file dialog to select a PDF file and returns the file path.
    """
    Tk().withdraw()  # Hide the main tkinter window
    file_path = askopenfilename(
        filetypes=[("PDF Files", "*.pdf")],
        title="Select the PDF file"
    )
    if not file_path:
        raise FileNotFoundError("No file selected.")
    return file_path

def save_excel_file():
    """
    Opens a file dialog to select where to save the Excel file and returns the file path.
    """
    Tk().withdraw()  # Hide the main tkinter window
    file_path = asksaveasfilename(
        defaultextension=".xlsx",
        filetypes=[("Excel Files", "*.xlsx")],
        title="Save the Excel file as"
    )
    if not file_path:
        raise FileNotFoundError("No save location selected.")
    return file_path

def extract_data_from_pdf(pdf_path):
    """
    Extracts structured data from the given PDF file.
    """
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

    doc.close()
    return extracted_data

def save_to_excel(data, output_path):
    """
    Saves extracted data to an Excel file.
    """
    df = pd.DataFrame(data)
    df.to_excel(output_path, index=False)
    print(f"Data saved to {output_path}")

def main():
    print("Please select the PDF file to process.")
    pdf_path = open_pdf_file()

    print("Extracting data from PDF...")
    data = extract_data_from_pdf(pdf_path)

    if not data:
        print("No data extracted. Please check the PDF file format.")
        return

    print("Please select where to save the extracted data as an Excel file.")
    output_path = save_excel_file()

    print("Saving data to Excel...")
    save_to_excel(data, output_path)

    print("Process completed successfully!")

if __name__ == "__main__":
    main()
