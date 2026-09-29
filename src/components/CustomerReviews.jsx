import React, { useState } from 'react';
import { siteConfig } from '../config/siteConfig';
import { Star, MessageSquare, Plus, CheckCircle2, User, MapPin, Sparkles } from 'lucide-react';

export const CustomerReviews = () => {
  const [reviews, setReviews] = useState(siteConfig.testimonials);
  const [showAddReviewModal, setShowAddReviewModal] = useState(false);
  const [newReview, setNewReview] = useState({
    customerName: '',
    location: '',
    service: 'Full Home Deep Cleaning',
    rating: 5,
    comment: ''
  });
  const [submittedMessage, setSubmittedMessage] = useState(false);

  const handleSubmitReview = (e) => {
    e.preventDefault();
    if (!newReview.customerName || !newReview.comment) return;

    const item = {
      id: 'rev-' + Date.now(),
      customerName: newReview.customerName,
      location: newReview.location || 'Local Resident',
      service: newReview.service,
      rating: Number(newReview.rating),
      date: 'Just Now',
      comment: newReview.comment,
      isPlaceholder: false
    };

    setReviews([item, ...reviews]);
    setSubmittedMessage(true);
    setTimeout(() => {
      setSubmittedMessage(false);
      setShowAddReviewModal(false);
      setNewReview({ customerName: '', location: '', service: 'Full Home Deep Cleaning', rating: 5, comment: '' });
    }, 1500);
  };

  return (
    <section className="section-padding" style={{ background: '#FFFFFF' }}>
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <span className="section-badge blue">
            <Sparkles size={14} />
            AUTHENTIC FEEDBACK
          </span>
          <h2 className="section-title">
            CUSTOMER <span className="text-gradient">REVIEWS</span>
          </h2>
          <p className="section-subtitle">
            Read what our clients say about our cleaning teams, or submit your own post-service review.
          </p>
        </div>

        {/* Reviews Cards Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
          gap: '24px',
          marginBottom: '36px'
        }}>
          {reviews.map((rev) => (
            <div
              key={rev.id}
              className="card"
              style={{
                padding: '28px 24px',
                borderRadius: '20px',
                border: rev.isPlaceholder ? '2px dashed var(--color-border-subtle)' : '1px solid var(--color-border-light)',
                background: rev.isPlaceholder ? 'var(--color-bg-subtle)' : '#FFFFFF',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                position: 'relative'
              }}
            >
              <div>
                {/* Rating Stars */}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '14px' }}>
                  <div style={{ display: 'flex', gap: '3px' }}>
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={16}
                        fill={i < rev.rating ? '#FFD166' : 'none'}
                        color={i < rev.rating ? '#FFD166' : 'var(--color-border-subtle)'}
                      />
                    ))}
                  </div>

                  <span style={{ fontSize: '0.78rem', color: 'var(--color-text-light)', fontWeight: 600 }}>
                    {rev.date}
                  </span>
                </div>

                {/* Comment */}
                <p style={{
                  fontSize: '0.94rem',
                  color: rev.isPlaceholder ? 'var(--color-text-light)' : 'var(--color-navy-800)',
                  fontStyle: rev.isPlaceholder ? 'italic' : 'normal',
                  lineHeight: 1.6,
                  marginBottom: '20px'
                }}>
                  "{rev.comment}"
                </p>
              </div>

              {/* Author Details */}
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                borderTop: '1px solid var(--color-border-light)',
                paddingTop: '16px'
              }}>
                <div style={{
                  width: '42px',
                  height: '42px',
                  borderRadius: '50%',
                  background: rev.isPlaceholder ? 'var(--color-border-subtle)' : 'var(--color-cyan-100)',
                  color: 'var(--color-royal-600)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontWeight: 800,
                  fontSize: '0.95rem'
                }}>
                  {rev.customerName.charAt(0)}
                </div>

                <div>
                  <div style={{ fontSize: '0.94rem', fontWeight: 800, color: 'var(--color-navy-800)' }}>
                    {rev.customerName}
                  </div>
                  <div style={{ fontSize: '0.78rem', color: 'var(--color-green-600)', fontWeight: 600 }}>
                    {rev.service}
                  </div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--color-text-light)' }}>
                    📍 {rev.location}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Action Button: Add Feedback */}
        <div style={{ textAlign: 'center' }}>
          <button
            onClick={() => setShowAddReviewModal(true)}
            className="btn btn-secondary"
            style={{ fontWeight: 600 }}
          >
            <Plus size={16} />
            <span>Leave a Customer Testimonial</span>
          </button>
        </div>

        {/* Add Review Modal */}
        {showAddReviewModal && (
          <div className="modal-overlay" onClick={() => setShowAddReviewModal(false)}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()} style={{ maxWidth: '520px', padding: '32px 28px' }}>
              <h3 style={{ fontSize: '1.4rem', fontWeight: 800, color: 'var(--color-navy-800)', marginBottom: '8px' }}>
                Share Your Cleaning Experience
              </h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)', marginBottom: '20px' }}>
                Your feedback helps us continuously elevate our service standards.
              </p>

              {submittedMessage ? (
                <div style={{ padding: '24px', background: 'var(--color-green-50)', borderRadius: '14px', textAlign: 'center', color: 'var(--color-green-600)' }}>
                  <CheckCircle2 size={36} style={{ margin: '0 auto 10px auto' }} />
                  <div style={{ fontWeight: 800 }}>Thank you for your review!</div>
                </div>
              ) : (
                <form onSubmit={handleSubmitReview}>
                  <div className="form-group">
                    <label className="form-label">Your Name</label>
                    <input
                      type="text"
                      className="form-input"
                      placeholder="e.g. Priyadarshini M."
                      required
                      value={newReview.customerName}
                      onChange={(e) => setNewReview({ ...newReview, customerName: e.target.value })}
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label">City / Locality</label>
                    <input
                      type="text"
                      className="form-input"
                      placeholder="e.g. Koramangala, Bengaluru"
                      value={newReview.location}
                      onChange={(e) => setNewReview({ ...newReview, location: e.target.value })}
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label">Service Received</label>
                    <select
                      className="form-select"
                      value={newReview.service}
                      onChange={(e) => setNewReview({ ...newReview, service: e.target.value })}
                    >
                      {siteConfig.services.map(s => (
                        <option key={s.id} value={s.title}>{s.title}</option>
                      ))}
                    </select>
                  </div>

                  <div className="form-group">
                    <label className="form-label">Rating (1 to 5 Stars)</label>
                    <select
                      className="form-select"
                      value={newReview.rating}
                      onChange={(e) => setNewReview({ ...newReview, rating: Number(e.target.value) })}
                    >
                      <option value="5">★★★★★ (5 - Excellent)</option>
                      <option value="4">★★★★☆ (4 - Very Good)</option>
                      <option value="3">★★★☆☆ (3 - Average)</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label className="form-label">Your Review Comments</label>
                    <textarea
                      className="form-textarea"
                      placeholder="Tell us about the punctuality, equipment, and cleaning quality..."
                      required
                      rows={3}
                      value={newReview.comment}
                      onChange={(e) => setNewReview({ ...newReview, comment: e.target.value })}
                    />
                  </div>

                  <div style={{ display: 'flex', gap: '12px', marginTop: '16px' }}>
                    <button
                      type="button"
                      onClick={() => setShowAddReviewModal(false)}
                      className="btn btn-secondary"
                      style={{ flex: 1 }}
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="btn btn-primary"
                      style={{ flex: 1, fontWeight: 700 }}
                    >
                      Submit Review
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
