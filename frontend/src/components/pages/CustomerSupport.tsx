import React from 'react';
import { Button, TextField, Typography, Card, CardContent, Divider } from '@mui/material';
import { FaPhone, FaEnvelope, FaQuestionCircle } from 'react-icons/fa';

const CustomerSupport: React.FC = () => {
  return (
    <div className="page-content max-w-screen-lg mx-auto px-4 py-8">
      <Typography variant="h1" className="text-4xl font-bold mb-6">
        Customer Support
      </Typography>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Support Form */}
        <Card className="shadow-lg">
          <CardContent>
            <Typography variant="h6" className="font-semibold mb-4">
              Request Support
            </Typography>
            <form noValidate autoComplete="off" className="space-y-4">
              <div>
                <TextField
                  label="Name"
                  id="name"
                  variant="outlined"
                  fullWidth
                  required
                />
              </div>
              <div>
                <TextField
                  label="Email"
                  id="email"
                  type="email"
                  variant="outlined"
                  fullWidth
                  required
                />
              </div>
              <div>
                <TextField
                  label="Issue"
                  id="issue"
                  variant="outlined"
                  fullWidth
                  multiline
                  rows={4}
                  required
                />
              </div>
              <Button variant="contained" color="primary" type="submit" fullWidth>
                Submit Request
              </Button>
            </form>
          </CardContent>
        </Card>

        {/* Support Information */}
        <Card className="shadow-lg">
          <CardContent>
            <Typography variant="h6" className="font-semibold mb-4">
              Support Information
            </Typography>
            <div className="flex flex-col space-y-4">
              <div className="flex items-center">
                <FaPhone className="text-2xl text-blue-500 mr-2" />
                <Typography variant="body1">
                  +1 (123) 456-7890
                </Typography>
              </div>
              <div className="flex items-center">
                <FaEnvelope className="text-2xl text-blue-500 mr-2" />
                <Typography variant="body1">
                  support@interviewmaster.ai
                </Typography>
              </div>
              <div className="flex items-center">
                <FaQuestionCircle className="text-2xl text-blue-500 mr-2" />
                <Typography variant="body1">
                  Visit our <a href="/faq" className="text-blue-600 underline">FAQ</a> page for more help.
                </Typography>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Divider className="my-8" />

      {/* FAQ Section */}
      <Card className="shadow-lg">
        <CardContent>
          <Typography variant="h6" className="font-semibold mb-4">
            Frequently Asked Questions
          </Typography>
          <div className="space-y-4">
            <Typography variant="body1">
              <strong>Q: How do I reset my password?</strong>
              <br />
              A: You can reset your password by clicking on the "Forgot Password" link on the login page.
            </Typography>
            <Typography variant="body1">
              <strong>Q: How can I contact customer support?</strong>
              <br />
              A: You can reach out to our customer support team through the contact form above or by emailing support@interviewmaster.ai.
            </Typography>
            <Typography variant="body1">
              <strong>Q: Where can I find more information about your services?</strong>
              <br />
              A: Visit our <a href="/services" className="text-blue-600 underline">Services</a> page for more details.
            </Typography>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default CustomerSupport;
