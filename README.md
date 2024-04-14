# Tax Calculator

## Description
The Tax Calculator is a website designed to help users calculate their taxes based on their input. It utilizes a specific formula to calculate taxes based on the user's anuual income , extra income(Income from other sources), all expenses in a year and age as outlined in the references and requirements section. After calculating their taxes our programme gives them their overall income after tax deductions.

## References & Requirements
- **Tax Calculation Formula**: 
    - Income under 8 Lakhs: Not taxed.
    - Income over 8 Lakhs:
        - Age < 40: 30% tax
        - Age ≥ 40 but < 60: 40% tax
        - Age ≥ 60: 10% tax
- **Label Functionality**:
    - Labels are provided with tooltips to provide guidance to users. Hover over the question mark icon to see the tooltip.
    ![Screenshot 1](https://dl.dropboxusercontent.com/scl/fi/wovg66yykqoj6yi83tmyv/labels.jpeg?rlkey=f74kjaygx3fnrhy2ifi8bkhts&dl=0)

- **Input Validation**:
    - if input filed is empty an error icon display right side of the input box with the tooltip that "please enter numbers".

        ![Screenshot 1](https://dl.dropboxusercontent.com/scl/fi/brej5tgfv9q1jthhwcl0r/input-icon.PNG?rlkey=nfrbh9azgxygbusodj0qkaa2h&dl=0)  

    - All input fields are required to fill otherwise the form will not submit .
        ![Screenshot 1](https://dl.dropboxusercontent.com/scl/fi/ryt9e3cegxvoxcq6xw0lq/input-1.PNG?rlkey=wj4hav5a3hq9yvngrgaag5t8z&dl=0)

    - Age dropdown must be selected otherwise, form will not  submit.
         ![Screenshot 1](https://dl.dropboxusercontent.com/scl/fi/bkaiuoaqqgq12u3dprcpg/age.PNG?rlkey=jj4wxjpf896haay5qgkfukadf&dl=0)




    - If user input only numbers than this error icons will not  displayed next to number fields.
        ![Screenshot 1](https://dl.dropboxusercontent.com/scl/fi/b2appv7oqy9s91epn4b3x/input-2.PNG?rlkey=bn8y3g7xiics40iav6uie5k3u&dl=0)


    - If non-numeric charcaters or non-numeric charcaters with numbers are entered, a red error icon(hover to see the message) displayed.
        ![Screenshot 1](https://dl.dropboxusercontent.com/scl/fi/wvlgtitrl4dri4a6q9ozg/scr3.PNG?rlkey=ov0ojiuc8ipja5o6nhjtfibqt&dl=0)




## Technologies Used
- HTML
- CSS
- JavaScript
- Bootstrap (for UI components)


## Assumptions
- Users are expected to input their income, deductions, and age accurately.
- Programme will give the overall income in indian rupees and tax percentages are predefiend according to the age group.
- No backend processing is required all calculations are done on the client-side.

## Getting Started
To run the Tax Calculator locally:
1. Clone the repository to your local machine.
2. Open the `index.html` file in a web browser.

## How to Use
1. Fill in the input fields with your financial information.
2. Ensure all fields are correctly filled; error icons will indicate any issues.
3. Select your age range from the dropdown.
4. Click the "Submit" button.
5. A modal will appear displaying the calculated overall income after deducting your overall expenses and tax deductions.


## Demo
A live demo of the Tax Calculator can be accessed [here](https://khushboo967.000webhostapp.com/).

## All Cases

1. When all input fields filled accurately.
    ![Screenshot 1](https://dl.dropboxusercontent.com/scl/fi/dopa68xdawgdudpgj6zwo/test-1.PNG?rlkey=a0jji5bnf4avv4nue2f6gglb9&dl=0)

2. If input contains only characters and no numbers, the form will not submit.
       ![Screenshot 1](https://dl.dropboxusercontent.com/scl/fi/dudh41o45fz7xsca0eiit/forn-submission-alert.jpeg?rlkey=c1fuakmhk6gvndt92dmq31ftg&dl=0)

3. If input contains both numbers and characters, the error icons show but if user still submit the form than the programme will take input after removing characters itself and return the overall income in indian rupees.
![Screenshot 1](https://dl.dropboxusercontent.com/scl/fi/anp9aupo8dgisv8kuaega/form-char-submission.jpeg?rlkey=jaxkuj0pwuu5snhinmpjqkc07&dl=0)

    
     


## License
This project is licensed under the MIT License. See the [LICENSE](https://github.com/borasi-khushboo/Tax-Calculator/blob/master/LICENSE) file for details.

## Contact
For any questions or feedback, feel free to contact the project maintainer:
- [Khushboo Borasi](mailto:khushbooborasi72@gmail.com)





