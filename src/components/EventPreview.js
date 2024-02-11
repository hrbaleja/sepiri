import React, { useRef } from 'react';
import './EventPreview.css';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import { Button, Paper, Typography,Grid } from '@mui/material';
import CloudDownloadIcon from '@mui/icons-material/CloudDownload';
import PrintIcon from '@mui/icons-material/Print';

const EventPreview = ({ formData }) => {
    const componentRef = useRef();
    const handlePrint = async () => {
        const content = componentRef.current;
        try {
            const pdf = new jsPDF('p', 'mm', 'a4');
            for (let i = 0; i < content.children.length; i++) {
                const section = content.children[i];
                const canvas = await html2canvas(section);
                const imgData = canvas.toDataURL('image/png');
                const width = pdf.internal.pageSize.getWidth();
                const height = pdf.internal.pageSize.getHeight();
                pdf.addImage(imgData, 'PNG', 0, 0, width, height);
                if (i < content.children.length - 1) {
                    pdf.addPage();
                }
            }
            pdf.save('event-preview.pdf');
        } catch (error) {
            console.error('Error generating PDF:', error);
        }
    };

    const handleShowPrintPreview = () => {
        const content = componentRef.current;
        const newWindow = window.open('', '_blank');
        newWindow.document.write('<html><head><title>BSE Report</title></head><body>');
        newWindow.document.write(content.innerHTML);
        newWindow.document.write('</body></html>');
        newWindow.document.close();
        newWindow.print();
    };

    return (    <Grid container spacing={2} justifyContent="center">

        <Paper elevation={3} style={{ marginTop: '20px', marginBottom: '20px', paddingBottom: '20px' }}>
            <div>
            <Typography variant="h5" gutterBottom textAlign={'center'} style={{marginLeft:'10px', marginTop:'10px'}}>          BSE Report Preview        </Typography>

                <Button variant="contained" onClick={handlePrint} style={{ margin: '1rem' }} startIcon={<CloudDownloadIcon />}>Print PDF</Button>
                <Button variant="contained" onClick={handleShowPrintPreview} style={{ margin: '1rem' }} startIcon={<PrintIcon />}>Show Print Preview</Button>
                <hr></hr>
                <div className='mupdf' ref={componentRef}>
                    {/* Page 1 */}
                    <section>
                        <p><b>Date:</b> {formData.date}</p>
                        <p><b>Time:</b> {formData.time}</p>
                        <p><b>Address:</b> {formData.address}</p>
                        <br></br>
                        <br></br>
                        <br></br>
                        {formData.mainImage && (
                            <img
                                src={URL.createObjectURL(formData.mainImage)}
                                alt="Main"
                                style={{ maxWidth: '650px', maxHeight: '100%', objectFit: 'contain' }}
                            />
                        )}
                    </section>
                    {/* Page 2 */}
                    <section>
                        {formData.image1 && (
                            <img
                                src={URL.createObjectURL(formData.image1)}
                                alt="Banner 1"
                                style={{ maxWidth: '650px', maxHeight: '50%', objectFit: 'contain' }}
                            />
                        )}
                        {formData.image2 && (
                            <img
                                src={URL.createObjectURL(formData.image2)}
                                alt="Banner 2"
                                style={{ maxWidth: '650px', maxHeight: '50%', objectFit: 'contain' }}
                            />
                        )}
                    </section>
                    {/* Page 3 */}
                    <section>
                        {formData.image3 && (
                            <img
                                src={URL.createObjectURL(formData.image3)}
                                alt="Banner 3"
                                style={{ maxWidth: '650px', maxHeight: '50%', objectFit: 'contain' }}
                            />
                        )}
                        {formData.image4 && (
                            <img
                                src={URL.createObjectURL(formData.image4)}
                                alt="Banner 4"
                                style={{ maxWidth: '650px', maxHeight: '50%', objectFit: 'contain' }}
                            />
                        )}
                    </section>
                    {/* Page 4 */}
                    <section>
                        {formData.attendanceImage1 && (
                            <img
                                src={URL.createObjectURL(formData.attendanceImage1)}
                                alt="Banner 4"
                                style={{ maxWidth: '650px', maxHeight: '50%', objectFit: 'contain' }}
                            />
                        )}
                        {formData.attendanceImage2 && (
                            <img
                                src={URL.createObjectURL(formData.attendanceImage2)}
                                alt="Banner 4"
                                style={{ maxWidth: '650px', maxHeight: '50%', objectFit: 'contain' }}
                            />
                        )}
                    </section>
                    {/* Page 5 */}
                    <section>
                        {formData.certificateImage && (
                            <img src={URL.createObjectURL(formData.certificateImage)}
                                alt='certificateImage'
                                style={{ maxWidth: '650px', maxHeight: '50%', objectFit: 'contain' }} />
                        )}
                    </section>
                </div>
                <hr></hr>
            </div>
        </Paper></Grid>
    );
};
export default EventPreview;