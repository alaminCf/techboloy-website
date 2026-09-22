import React, { useState } from 'react';
import { Plus, Trash2, FileText, X } from 'lucide-react';
import { useCMS } from '../../context/CMSContext';
import { InsightPost } from '../../types';

export const InsightsManagerTab: React.FC = () => {
  const { insights, addInsight, deleteInsight } = useCMS();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [newPost, setNewPost] = useState<Omit<InsightPost, 'id'>>({
    slug: '',
    title: '',
    category: 'Technology',
    excerpt: '',
    content: '',
    author: {
      name: 'Tariqul Islam',
      role: 'Founder & CEO',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80'
    },
    publishedAt: new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }),
    readingTime: '5 min read',
    coverImage: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1000&auto=format&fit=crop&q=80',
    tags: ['Technology', 'Software']
  });

  const [tagsInput, setTagsInput] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const slug = newPost.slug || newPost.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
    const tags = tagsInput ? tagsInput.split(',').map(t => t.trim()).filter(Boolean) : newPost.tags;

    addInsight({
      ...newPost,
      slug,
      tags
    });

    setIsModalOpen(false);
  };

  return (
    <div className="max-w-6xl mx-auto space-y-8">
      
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold text-white font-display">
            Tech Insights & Blog Management
          </h2>
          <p className="text-xs text-slate-400 mt-1">
            Write, publish, and curate thought leadership articles displayed on the Techboloy website.
          </p>
        </div>

        <button
          onClick={() => setIsModalOpen(true)}
          className="px-4 py-2.5 rounded-xl font-bold text-xs text-white bg-brand-gradient hover:shadow-glow-sm flex items-center gap-1.5 transition-all"
        >
          <Plus className="w-4 h-4" />
          <span>Write New Article</span>
        </button>
      </div>

      {/* Articles Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {insights.map((post) => (
          <div
            key={post.id}
            className="rounded-3xl bg-slate-900 border border-slate-800 overflow-hidden shadow-sm flex flex-col justify-between"
          >
            <div>
              <div className="relative h-44 overflow-hidden bg-slate-950">
                <img src={post.coverImage} alt={post.title} className="w-full h-full object-cover" />
                <span className="absolute top-3 left-3 px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-slate-950/80 backdrop-blur-md text-brand-magenta">
                  {post.category}
                </span>
              </div>

              <div className="p-5 space-y-2">
                <div className="text-[10px] text-slate-400">{post.publishedAt} • {post.readingTime}</div>
                <h3 className="text-base font-bold text-white line-clamp-2">{post.title}</h3>
                <p className="text-xs text-slate-400 line-clamp-2">{post.excerpt}</p>
              </div>
            </div>

            <div className="p-5 pt-0 border-t border-slate-800 flex items-center justify-between">
              <span className="text-[10px] text-slate-500 font-mono">By {post.author.name}</span>
              <button
                onClick={() => {
                  if (confirm(`Delete article "${post.title}"?`)) {
                    deleteInsight(post.id);
                  }
                }}
                className="p-1.5 text-slate-500 hover:text-rose-400 rounded transition-colors"
                title="Delete Post"
              >
                <Trash2 className="w-4 h-4" />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Create Article Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 max-w-xl w-full space-y-4 text-xs">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <h3 className="text-lg font-bold text-white">Create New Article</h3>
              <button onClick={() => setIsModalOpen(false)} className="text-slate-400 hover:text-white">
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-3">
              <div>
                <label className="block text-slate-300 font-semibold mb-1">Article Title *</label>
                <input
                  type="text"
                  required
                  value={newPost.title}
                  onChange={(e) => setNewPost({ ...newPost, title: e.target.value })}
                  placeholder="e.g., How Edge Computing Changes Enterprise Performance"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white text-sm"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-slate-300 font-semibold mb-1">Category *</label>
                  <select
                    value={newPost.category}
                    onChange={(e) => setNewPost({ ...newPost, category: e.target.value as any })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white text-sm"
                  >
                    <option value="Technology">Technology</option>
                    <option value="Business">Business</option>
                    <option value="Digital Marketing">Digital Marketing</option>
                    <option value="AI">AI</option>
                    <option value="Web Development">Web Development</option>
                    <option value="Startup">Startup</option>
                  </select>
                </div>

                <div>
                  <label className="block text-slate-300 font-semibold mb-1">Reading Time</label>
                  <input
                    type="text"
                    value={newPost.readingTime}
                    onChange={(e) => setNewPost({ ...newPost, readingTime: e.target.value })}
                    placeholder="e.g., 5 min read"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white text-sm"
                  />
                </div>
              </div>

              <div>
                <label className="block text-slate-300 font-semibold mb-1">Cover Image URL</label>
                <input
                  type="text"
                  value={newPost.coverImage}
                  onChange={(e) => setNewPost({ ...newPost, coverImage: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white text-sm"
                />
              </div>

              <div>
                <label className="block text-slate-300 font-semibold mb-1">Excerpt / Summary *</label>
                <textarea
                  rows={2}
                  required
                  value={newPost.excerpt}
                  onChange={(e) => setNewPost({ ...newPost, excerpt: e.target.value })}
                  placeholder="Key takeaway..."
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white text-sm resize-none"
                />
              </div>

              <div>
                <label className="block text-slate-300 font-semibold mb-1">Article Content (Markdown/Text) *</label>
                <textarea
                  rows={6}
                  required
                  value={newPost.content}
                  onChange={(e) => setNewPost({ ...newPost, content: e.target.value })}
                  placeholder="Write the article content..."
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white text-sm resize-none font-mono"
                />
              </div>

              <div>
                <label className="block text-slate-300 font-semibold mb-1">Tags (comma-separated)</label>
                <input
                  type="text"
                  value={tagsInput}
                  onChange={(e) => setTagsInput(e.target.value)}
                  placeholder="AI, Cloud, React, Architecture"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white text-sm"
                />
              </div>

              <div className="pt-3 flex justify-end gap-3">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="px-4 py-2 rounded-xl text-slate-400 bg-slate-800"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-6 py-2 rounded-xl font-bold text-white bg-brand-gradient"
                >
                  Publish Article
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

    </div>
  );
};
