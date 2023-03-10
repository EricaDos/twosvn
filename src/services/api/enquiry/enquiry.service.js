import axios from '../../axios';

class EnquiryService {
  async submitEnquiry(body) {
    const response = await axios.post('/enquiry', body);
    return response;
  }
}

export const enquiryService = new EnquiryService();
