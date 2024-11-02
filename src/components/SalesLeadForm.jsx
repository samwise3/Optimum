import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

const SalesLeadForm = () => {
  const [formData, setFormData] = useState({
    // Contact Information
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    
    // Address Information
    streetAddress: '',
    unit: '',
    city: '',
    state: '',
    zipCode: '',
    
    // Current Service Information
    currentProvider: '',
    currentPlanSpeed: '',
    currentMonthlyRate: '',
    contractEndDate: '',
    
    // Service Requirements
    interestedServices: {
      internet: false,
      tv: false,
      phone: false,
      security: false
    },
    
    // Usage Information
    deviceCount: '',
    streamingServices: '',
    workFromHome: false,
    gaming: false,
    
    // Additional Information
    bestTimeToContact: '',
    notes: '',
    appointmentSet: false,
    leadQuality: 'medium',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleCheckboxChange = (service) => {
    setFormData(prev => ({
      ...prev,
      interestedServices: {
        ...prev.interestedServices,
        [service]: !prev.interestedServices[service]
      }
    }));
  };

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle>Internet Sales Lead Form</CardTitle>
      </CardHeader>
      <CardContent>
        <form className="space-y-6">
          {/* Contact Information */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contact Information</h3>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="firstName">First Name</Label>
                <Input
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  className="w-full"
                />
              </div>
              <div>
                <Label htmlFor="lastName">Last Name</Label>
                <Input
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  className="w-full"
                />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="phone">Phone Number</Label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full"
                />
              </div>
              <div>
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full"
                />
              </div>
            </div>
          </div>

          {/* Address Information */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Address Information</h3>
            <div>
              <Label htmlFor="streetAddress">Street Address</Label>
              <Input
                id="streetAddress"
                name="streetAddress"
                value={formData.streetAddress}
                onChange={handleInputChange}
                className="w-full"
              />
            </div>
            <div className="grid grid-cols-4 gap-4">
              <div>
                <Label htmlFor="unit">Unit/Apt</Label>
                <Input
                  id="unit"
                  name="unit"
                  value={formData.unit}
                  onChange={handleInputChange}
                  className="w-full"
                />
              </div>
              <div className="col-span-2">
                <Label htmlFor="city">City</Label>
                <Input
                  id="city"
                  name="city"
                  value={formData.city}
                  onChange={handleInputChange}
                  className="w-full"
                />
              </div>
              <div>
                <Label htmlFor="zipCode">ZIP Code</Label>
                <Input
                  id="zipCode"
                  name="zipCode"
                  value={formData.zipCode}
                  onChange={handleInputChange}
                  className="w-full"
                />
              </div>
            </div>
          </div>

          {/* Current Service Information */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Current Service Information</h3>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="currentProvider">Current Provider</Label>
                <Input
                  id="currentProvider"
                  name="currentProvider"
                  value={formData.currentProvider}
                  onChange={handleInputChange}
                  className="w-full"
                />
              </div>
              <div>
                <Label htmlFor="currentPlanSpeed">Current Plan Speed</Label>
                <Input
                  id="currentPlanSpeed"
                  name="currentPlanSpeed"
                  value={formData.currentPlanSpeed}
                  onChange={handleInputChange}
                  className="w-full"
                />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="currentMonthlyRate">Current Monthly Rate</Label>
                <Input
                  id="currentMonthlyRate"
                  name="currentMonthlyRate"
                  type="number"
                  value={formData.currentMonthlyRate}
                  onChange={handleInputChange}
                  className="w-full"
                />
              </div>
              <div>
                <Label htmlFor="contractEndDate">Contract End Date</Label>
                <Input
                  id="contractEndDate"
                  name="contractEndDate"
                  type="date"
                  value={formData.contractEndDate}
                  onChange={handleInputChange}
                  className="w-full"
                />
              </div>
            </div>
          </div>

          {/* Service Requirements */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Interested Services</h3>
            <div className="grid grid-cols-2 gap-4">
              {Object.keys(formData.interestedServices).map(service => (
                <div key={service} className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    id={service}
                    checked={formData.interestedServices[service]}
                    onChange={() => handleCheckboxChange(service)}
                    className="w-4 h-4"
                  />
                  <Label htmlFor={service} className="capitalize">{service}</Label>
                </div>
              ))}
            </div>
          </div>

          {/* Usage Information */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Usage Information</h3>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="deviceCount">Number of Devices</Label>
                <Input
                  id="deviceCount"
                  name="deviceCount"
                  type="number"
                  value={formData.deviceCount}
                  onChange={handleInputChange}
                  className="w-full"
                />
              </div>
              <div>
                <Label htmlFor="streamingServices">Streaming Services Used</Label>
                <Input
                  id="streamingServices"
                  name="streamingServices"
                  value={formData.streamingServices}
                  onChange={handleInputChange}
                  className="w-full"
                />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  id="workFromHome"
                  checked={formData.workFromHome}
                  onChange={() => setFormData(prev => ({...prev, workFromHome: !prev.workFromHome}))}
                  className="w-4 h-4"
                />
                <Label htmlFor="workFromHome">Works From Home</Label>
              </div>
              <div className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  id="gaming"
                  checked={formData.gaming}
                  onChange={() => setFormData(prev => ({...prev, gaming: !prev.gaming}))}
                  className="w-4 h-4"
                />
                <Label htmlFor="gaming">Gaming Household</Label>
              </div>
            </div>
          </div>

          {/* Additional Information */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Additional Information</h3>
            <div>
              <Label htmlFor="bestTimeToContact">Best Time to Contact</Label>
              <Select 
                onValueChange={(value) => setFormData(prev => ({...prev, bestTimeToContact: value}))}
                value={formData.bestTimeToContact}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select best time..." />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="morning">Morning (9AM - 12PM)</SelectItem>
                  <SelectItem value="afternoon">Afternoon (12PM - 5PM)</SelectItem>
                  <SelectItem value="evening">Evening (5PM - 8PM)</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label htmlFor="notes">Notes</Label>
              <Textarea
                id="notes"
                name="notes"
                value={formData.notes}
                onChange={handleInputChange}
                className="w-full h-24"
              />
            </div>
            <div className="flex items-center space-x-2">
              <input
                type="checkbox"
                id="appointmentSet"
                checked={formData.appointmentSet}
                onChange={() => setFormData(prev => ({...prev, appointmentSet: !prev.appointmentSet}))}
                className="w-4 h-4"
              />
              <Label htmlFor="appointmentSet">Appointment Set</Label>
            </div>
            <div>
              <Label htmlFor="leadQuality">Lead Quality</Label>
              <Select 
                onValueChange={(value) => setFormData(prev => ({...prev, leadQuality: value}))}
                value={formData.leadQuality}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select lead quality..." />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="hot">Hot Lead</SelectItem>
                  <SelectItem value="warm">Warm Lead</SelectItem>
                  <SelectItem value="cold">Cold Lead</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <Button type="submit" className="w-full">Save Lead Information</Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default SalesLeadForm;